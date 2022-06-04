import React from "react";
// import "./App.css";
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
} from "./TodoCounter";

/**
 * Nota: App() es un componente que retorna los elementos de la sintaxis JSX
 *
 */

const todos = [
  { text: "Cortar Cebolla", completed: false },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    //Pedir a React una etiqueta Invisible

    //Una etiqueta por Componente
    // Al utilizar React.Fragment ya estaria importando al CSS
    <React.Fragment>
      <TodoCounter />
      {/* <h2>Has Completado 2 de 3 TODOs</h2> */}

      <TodoSearch />
      {/* <input placeholder="Cebolla" /> */}

      <TodoList>
        {/* Aqui Renderisamos un TODO */}

        {/* ESTE ES NUESTRO CHILDREN */}
        {todos.map((todo) => (
          //Aqui llamamos al objeto literal "todos"
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export default App;
