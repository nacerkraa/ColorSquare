import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TodoItem from './component/TodoItem';
import InputArea from './component/InputArea';




function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);


  

  function InputHandler(event) {
    setInput(event.target.value);
  }

  function addInput(event) {
    setItem(prevItems=> {
      return [...prevItems, input];
    });

    setInput("");
  }

  function deleteItem(id) {
    setItem((prevItems)=>{
      return prevItems.filter((item, index)=> {
        return index !== id;
      })
    });
  }



  return (
    <div className="App">
      <Navbar/>
        <InputArea onChange={InputHandler} onClicked={addInput}/>
        
        <ul>
          {item.map((todoItem, index) =>
            <TodoItem key={index} id={index} text={todoItem} onChecked={deleteItem}/>
          )}
        </ul>
    </div>
  );
}

export default App;
