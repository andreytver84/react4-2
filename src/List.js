import "./List.css";

function List(props) {
    const btnRemoveClichHandler = () => {
       props.onRemoveItem(props.list);
    }
    return (
        <div className="listItem">
            <div className="wrap wrap-distance" >{props.list.distance} км</div>
            <div className="wrap wrap-date" >{props.list.date}</div>
            <div className="wrap wrap-edit" ><button onClick={btnRemoveClichHandler}>удалить</button></div>
        </div>
    )
}

export default List;