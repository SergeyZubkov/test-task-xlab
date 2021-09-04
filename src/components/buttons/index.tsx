
import Icon from "../icon";
import "./style.scss";

interface ButtonProps extends React.ComponentProps<"button"> {
    icon?: string,
    variant: "primary" | "secondary"
}

const Button = (props: ButtonProps) => {
    const { children, icon, variant, ...otherProps } = props;

    return (
        <button className={"button-" + variant} {...otherProps}>
            {icon&&<Icon name={icon} />}
            <div>{children}</div>
        </button>
    )
}

export default Button;