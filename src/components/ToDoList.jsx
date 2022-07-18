import React from "react";
import Todo from "./Todo";
const ToDoList = ({ todo, todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* list the todo components here */}
                {filteredTodos.map(todo => (
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