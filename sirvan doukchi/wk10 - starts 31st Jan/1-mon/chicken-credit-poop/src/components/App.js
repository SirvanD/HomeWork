import "./App.css";
import ChickenCounter from "./ChickenCounter.js";
import CardDetector from "./CardDetector";
import PoopTranslator from "./PoopTranslator";
import { useState } from "react";

//hooks
//useState
// get me a backpack

//example for using a function component - we need state in this function hence using hooks
function Counter() {
  //get me a backpack
  // let arr = useState(0)
  // let[0] - state- viewer value for you to see whats inside the backpack
  // let[1] - setState fn - to update the contents of the backpack

  let [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1); //concurrency problem : even with 2 of these, it only adds 1
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

function ShoppingCart() {
  let [items, setItems] = useState([]);

  const handleAdd = () => {
    //cannot directly mutate the array /modify the state
    //make a copy of items first
    //1 way to make a new copy below
    // let newItems = items.slice(0);
    //or use spreador - use rest & spread
    let newItems = [...items];
    newItems.push("tomato");
    // setItems(["cake", "pudding"]);
    setItems(newItems);
  };

  return (
    <div>
      <h1>cart</h1>
      <button onClick={handleAdd}>add an item</button>
      <p>{items.join(", ")}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ChickenCounter />
      <CardDetector />
      <PoopTranslator />
      <Counter />
      <ShoppingCart />
    </div>
  );
}

export default App;
