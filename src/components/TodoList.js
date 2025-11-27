import React from "react";

export default function TodoList({todos, handleComplete}) {
    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        {!todo.isComplete && (
                            <button onClick={() => handleComplete(todo.id)}>
                                Complete
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}