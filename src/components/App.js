import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, task: "Learn React", isComplete: false},
    {id: 2, task: "Build a React app", isComplete: false},
    {id: 3, task: "Deploy the React app", isComplete: false}
  ]);

  function handleComplete(id) {
    let updatedTodo = todos.map(t => t.id === id ? {...t, isComplete: true} : t);
    setTodos(updatedTodo);
  }
  
  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App