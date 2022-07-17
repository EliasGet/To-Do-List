import React from "react";
import Todo from "./Todo";
const ToDoList = ({ todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* list the todo components here */}
                {todos.map(item => (
                    <Todo />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;