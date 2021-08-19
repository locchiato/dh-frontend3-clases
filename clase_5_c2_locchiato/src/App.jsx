import Veterinaria from "./components/Veterinaria";
import List from "./components/List";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";

const name = "Pipo";
const names = ["Pacha", "Firulais", "Maya", name];

function App() {
  return (
    <div className="App">
      <Veterinaria >
      {names.map((name, index) => (
        <List name={name} index={index} render={(prefix, type) => (
          <Item prefix={prefix} type={type} />
        )} />
      ))}
      </Veterinaria>
    </div>
  );
}

export default App;
