import React from "react";
export default function TodoList({todos, onclick}){
    return(
        <div>
            <h2>Child Component</h2>
            <ul>
        {todos.map(t=>{
            return(
                <li key={t.id}>
                    <span>{t.task}</span>
                    {!t.iscomplete ? <button onClick={()=>onclick(t.id)}>Complete</button> : ""}
                </li>
            )
        })}
        </ul>
        </div>
    )
}