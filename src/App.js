import "./styles.css";
import ReactDOM from "react-dom";

export default function App() {
  const name = "Basil Maben";
  const element = <h1>Hello, {name}</h1>;

  ReactDOM.render(element, document.getElementById("root"));
  return null;
}
