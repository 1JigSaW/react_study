import React, {useState} from "react";

export default function App() {
  const [isImportant, setIsImportant] = React.useState("No")
  function handleClick() {
    setIsImportant("Yes")
  }
  const [count, setCount] = React.useState(0)
  function add () {
    setCount(prevCount => prevCount + 1)
  };
  function subtract () {
    setCount(prevCount => prevCount - 1)
  };
  return (
    <div className="state">
      <button className="counter--minus" onClick={subtract}></button>
      <div className="state--value">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}></button>
    </div>
  )
}