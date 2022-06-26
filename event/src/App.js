import React from "react";

export default function App() {
  function handleClick() {
    console.log("aaaaaa")
  }

  function handleOnMouseOver() {
    console.log("Mouse")
  }
  return (
    <div className="container"> 
      <img src="https://picsum.photos/640/360" onMouseOver={handleOnMouseOver} />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

