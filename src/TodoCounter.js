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
  /**Aqui es un Evento que devuelve a una funtion 
     
  const onClickButton = () => {
       alert("Aqui se debería abrir el modal");
    };
  */

  /**Aqui es para Ocupar este Evento para otros Eventos (Reutilizar) */

  const onClickButton = (msg) => alert(msg);

  return (
    /**
     * ES Requisito que cuando ocupamos por decir el "onClick" utilicemos una funcion
     * tipo flecha { ()=> } ya que es importante.
     */
    <button
      //
      className="CreateTodoButton"
      onClick={() => onClickButton("Aqui se deberia abrir el modal")}
    >
      +
    </button>
  );
}

export { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton };
