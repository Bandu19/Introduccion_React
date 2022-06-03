import React from "react";

function TodoCounter() {
  return <h2>Has Completado 3 de 3 TODOs</h2>;
}

function TodoSearch() {
  return <input placeholder="Cebolla" />;
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
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

function CreateTodoButton(props) {
  return <button>+</button>;
}

export { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton };
