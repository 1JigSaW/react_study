function Page() {
    return (
        <>
        <header>
            <nav>
                <img src="./react.png" width="40px"></img>
            </nav>
        </header>
        <h1>Hello</h1>
        <ol>
            <li>aaaa</li>
            <li>bbbb</li>
        </ol>
        <footer>
            <small>jigsaw</small>
        </footer>
        </>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))