import "./styles.css";
import ReactDOM from "react-dom";

export default function App() {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: " Basil",
    lastName: "Maben"
  };

  const element = <h1>Hello, {formatName(user)}!</h1>;

  ReactDOM.render(element, document.getElementById("root"));
}
