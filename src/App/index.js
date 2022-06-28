import React from "react";
import { AppUI } from "./AppUI";

/**
 * Nota: App() es un componente que retorna los elementos de la sintaxis JSX
 *
 */

// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: false },
//   { text: "Tomar el curso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALALALLA", completed: false },
// ];

function App() {
  // Metodo LocalStorage

  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos; // Este es

  // Si encuentras un String vacio
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([])); // Esto lo aguarda en el localStorage
    parsedTodos = []; // Un estado por defecto
  }
  // Si ya el ListTodos ya tiene valores anteriores.
  else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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

  // RE RENDER

  // Marcar completados
  // const completeTodo = (text) => {
  //   const todoIndex = todos.findIndex((todo) => todo.text === text);
  //   const newTodos = [...todos]; // Estamos Clonando una lista de Todos | Creando una NUEVA LISTA DE Todos
  //   newTodos[todoIndex].completed = true;
  //   setTodos(newTodos);
  // };

  // Metodo LocalStorage
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    // MANDAR EL MENSAJE QUE SELECCIONAMOS = Cortar Cebolla
    const todoIndex = todos.findIndex((todo) => todo.text === text); // Nos devuelve una posicion
    // Nos devuelve la posicion = 0

    // TOMA DE LA LISTA DE TODOS que tenemos
    const newTodos = [...todos];

    // Este es la condición para los marcados
    if (todos[todoIndex].completed === false) {
      todos[todoIndex].completed = true;
    } else {
      todos[todoIndex].completed = false;
    }
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    // BUSCA si el texto === al texto. Es decir compara MANZANA === MANZANA|
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    //Utilizar el metodo SPLIECE

    /**Este metodo se ocupa asign
     * splice("INICIO","POSICION para ELIMINAR ==>0" )
     */
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
