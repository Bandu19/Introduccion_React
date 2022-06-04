import React from "react";
import "./TodoCounter.css";

function TodoCounter() {
  return <h2 className="TodoCounter">Has Completado 3 de 3 TODOs</h2>;
}

function TodoSearch() {
  return <input className="TodoSearch" placeholder="Cebolla" />;
}

function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        // Si props.completed = TRUE enseguida se activara el estilo CSS
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        √
      </span>

      {/* Si props.completed = TRUE enseguida se activara el estilo CSS */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

function CreateTodoButton(props) {
  return <button className="CreateTodoButton">+</button>;
}

export { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton };
