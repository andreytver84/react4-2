import AddToList from './AddToList';
import './App.css';
import List from './List';
import { useState } from 'react';

const INITIAL_LIST_DATA = [];

function App() {
  const [listData, setListData] = useState(INITIAL_LIST_DATA);
  const saveListDatHandler = (inputListData) => {
    setListData(prevListData => [inputListData, ...prevListData].sort((a,b) => a.date > b.date ? 1 : -1));
  }
  const removeItem = (item) => {
    setListData(listData.filter(a => a !== item)); // удаление записи
  }
  return (
    <div className="App">
      <AddToList onSaveListData={saveListDatHandler} />
      <div className='List' >
        {listData.map((item, i) => <List onRemoveItem={removeItem} key={i} list={item} />)}
      </div>
    </div>
  );
}

export default App;
