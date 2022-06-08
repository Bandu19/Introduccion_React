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

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALALALLA", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  //Enviando el total a TodoCounter

  // Aqui decimos que todo esta completado es decir "TRUE"
  const completedTodos = todos.filter((todo) => !!todo.completed).length; //todo.completed == true

  // Aqui contamos todos los todos totales.
  const totalTodos = todos.length;

  /*
   */

  let searchedTodos = []; // Si ya han escrito o no han escrito nada.

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    // se filtra
    searchedTodos = todos.filter((todo) => {
      // Evitar errores de minusculas o mayusculas
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  return (
    //Pedir a React una etiqueta Invisible

    //Una etiqueta por Componente
    // Al utilizar React.Fragment ya estaria importando al CSS
    <React.Fragment>
      {/* Enviar Propiedad a TodoCounter */}
      <TodoCounter
        //
        total={totalTodos}
        completed={completedTodos}
      />
      {/* <h2>Has Completado 2 de 3 TODOs</h2> */}

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* <input placeholder="Cebolla" /> */}

      <TodoList>
        {/* Aqui Renderisamos un TODO */}

        {/* ESTE ES NUESTRO CHILDREN */}
        {searchedTodos.map((todo) => (
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
