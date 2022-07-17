import React from "react";
import Todo from "./Todo";
const ToDoList = ({ todo, todos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* list the todo components here */}
                {todos.map(todo => (
                    <Todo key={todo.id}
                        text={todo.text}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos} />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;