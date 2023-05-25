import "./AddToList.css";
import { useState } from "react";

function AddToList(props) {
    const [inputDate, setInputDate] = useState('');
    const [inputDistance, setInputDistance] = useState('');
    const dateChangehandler = (e) => {
        setInputDate(e.target.value);
    }
    const distanceChangehandler = (e) => {
        setInputDistance(e.target.value);
    }
    const SubmitHandler = (e) => {
        e.preventDefault();

        const listData = {
            date: inputDate,
            distance: inputDistance
        }
        setInputDate('');
        setInputDistance('');
        props.onSaveListData(listData);
    }

    return (
        <form className="AddToList" onSubmit={SubmitHandler} >
            <div className="wrap wrap-input">
                <label htmlFor="date">Дата</label>
                <input type="date" name="date" id="date" onChange={dateChangehandler} value={inputDate} />
            </div>
            <div className="wrap wrap-input">
                <label htmlFor="distance">Пройдено км</label>
                <input type="number" name="distance" id="distance" onChange={distanceChangehandler} value={inputDistance} />
            </div>
            <div className="wrap wrap-btn">                
                <button type="submit" >OK</button>
            </div>
        </form>
    )
}

export default AddToList;