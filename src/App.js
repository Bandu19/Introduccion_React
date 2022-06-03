import logo from "./logo.svg";
import "./App.css";
/**
 * Nota: App() es un componente que retorna los elementos de la sintaxis JSX
 *
 */

function App(props) {
  return (
    //Esto es una sintaxis de JSX

    // className="" = Son atributos

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola Mundo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Aqui mandamos a llamar la propiedad
        children */}
          {props.children}
        </a>
      </header>
    </div>
  );
}

export default App;
