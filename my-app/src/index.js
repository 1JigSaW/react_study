import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))