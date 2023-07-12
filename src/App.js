import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TodoItem from './component/TodoItem';




function App() {
  const [task, setTask] = useState("");
  const [SubmitTask, setSubmitTask] = useState([]);
  const [line, setLine] = useState({});


  

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
          {SubmitTask.map(todoItem => <li><TodoItem text={todoItem}/></li>)}
        </ul>
    </div>
  );
}

export default App;
