import React from "react";

export default function TodoList({todos, handleComplete}) {
    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map(t => {
                    return (
                        <li key={t.id}>
                            <span>{t.task}</span>
                            {!t.isComplete ? <button onClick={() => handleComplete(t.id)}>Complete</button> : null}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}