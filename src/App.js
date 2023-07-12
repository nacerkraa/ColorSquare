import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';



function App() {
  const [task, setTask] = useState("");
  const [SubmitTask, setSubmitTask] = useState([]);
  const myList = [];

  function taskHandler(event) {
    setTask(event.target.value);
  }

  function addTask(event) {
    setSubmitTask(prevItems=> {
      return [...prevItems, task];
    });

    setTask("");
  }



  return (
    <div className="App">
      <Navbar/>
        <input onChange={taskHandler} name='fname'/> 
        <button onClick={addTask}>Submit</button> <br/><br/>
        
        <ul>
          {SubmitTask.map(todoItem => <li>{todoItem}</li>)}
        </ul>
    </div>
  );
}

export default App;
