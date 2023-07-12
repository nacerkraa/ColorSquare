import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TodoItem from './component/TodoItem';




function App() {
  const [task, setTask] = useState("");
  const [SubmitTask, setSubmitTask] = useState([]);
  const [line, setLine] = useState({});
  const [isDone, setIsDone] = useState(false);


  

  function taskHandler(event) {
    setTask(event.target.value);
  }

  function addTask(event) {
    setSubmitTask(prevItems=> {
      return [...prevItems, task];
    });

    setTask("");
  }

  function handleStyle() {
    if (isDone == false) {
      setLine({textDecoration: "line-through"});
      setIsDone(true);
    } else {
      setLine({});
      setIsDone(false);
    }
  }


  return (
    <div className="App">
      <Navbar/>
        <input onChange={taskHandler} name='fname'/> 
        <button onClick={addTask}>Submit</button> <br/><br/>
        
        <ul>
          {SubmitTask.map(todoItem => <li onClick={handleStyle} style={line}><TodoItem text={todoItem}/></li>)}
        </ul>
    </div>
  );
}

export default App;
