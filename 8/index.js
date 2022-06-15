import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"

function MainContent() {
    return (
        <>
            <h1>Hello</h1>
            <ol>
                <li>aaaa</li>
                <li>bbbb</li>
            </ol>
        </>
    )
}

function Footer() {
    return (
        <> 
        <footer>
            <small>jigsaw</small>
        </footer>
        </>
    )
}

function Page() {
    return (
        <>
        
        <MainContent />
        <Footer />
        </>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))