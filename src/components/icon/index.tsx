import { useEffect, useState } from "react";

interface IconProps extends React.ComponentProps<"svg"> {
    name: string
}
function Icon(props: IconProps) {
    const { name, ...otherProps } = props;

    const [iconModule, setIconModule] = useState<any>(null);

    useEffect(() => {
        // При динамическом импорте не происходит обработки SVG утилитой svgr, workaround:
            // https://github.com/facebook/create-react-app/issues/5276#issuecomment-665628393
        import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../../icons/${name}.svg`)
            .then((module) => {
                setIconModule(module);
            })
            .catch((error) => {
                console.error(`Icon with name: ${name} not found!`);
            });
    }, [name]);

    const renderIcon = () => {
        if (!iconModule) return null;

        const Component = iconModule.default;

        return <Component {...otherProps} />;
    };

    return <>{renderIcon()}</>;
}

export default Icon;