import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import separate from "./separate";

function App() {

    const main = separate.map((main) => {
      return <Main 
            {...main}
            />
    })
    return (
    <>
      <Navbar />
      {main}
    </>
    )
}

export default App;
