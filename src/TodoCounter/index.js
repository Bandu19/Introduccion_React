import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  // const {total, complet} = props;
  return (
    <h2 className="TodoCounter">
      Has Completado {completed} de {total} TODOs
    </h2>
  );
}

function TodoSearch({ searchValue, setSearchValue }) {
  // React Hooks
  // const [] = React.useState("");

  // Este es el evento mas Especial

  const onSearchValueChange = (event) => {
    console.log(event.target.value); // Lo que escribimos en el "input"
    setSearchValue(event.target.value);
  };

  // DETALLE con la []
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
    //, <p>{searchValue}</p>,
  );
}

function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}
function TodoItem(props) {
  //
  // const onComplete = () => {
  //   alert("Ya completaste el todo " + props.text);
  // };

  // const onDelete = () => {
  //   alert("Borraste el todo " + props.text);
  // };
  return (
    <li className="TodoItem">
      <span
        // Si props.completed = TRUE enseguida se activara el estilo CSS
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>

      {/* Si props.completed = TRUE enseguida se activara el estilo CSS */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <span
        //
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
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
