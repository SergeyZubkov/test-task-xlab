interface ListProps<T> extends React.ComponentProps<"ul"> {
    data: T[],
    renderItem: (item: T, index: number) => React.ReactNode
}

const List = <T,>(props: ListProps<T>) => {
    const outerClassName = props.className;
    const { data, renderItem } = props;

    return (
        <ul className={outerClassName}>
            {data.map(
                (item, index) => renderItem(item, index)
            )}
        </ul>
    )
}

export default List;