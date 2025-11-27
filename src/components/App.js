
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const[todos,setTodos] = useState([
    {id:1,task:"Learn React",iscomplete:false,},{id:2,task:"Build a React app", iscomplete:false,} , {id:3,task:"Deploy the React app",iscomplete:false,}
  ]);

  function handleComplete(id){
let updatedTodo = todos.map(t=>t.id==id?{...t,iscomplete:true}:t);
setTodos(updatedTodo);
  }
  return (
    <div>
      <h1>Parent Component</h1>
        <TodoList todos={todos} onclick={handleComplete}/>
    </div>
  )
}

export default App
