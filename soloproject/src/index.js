import React from "react";
import ReactDOM from "react-dom";
import Head from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <Head />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))