import React from "react";

import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
} from "../TodoCounter";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export { AppUI };
