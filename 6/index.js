function Header() {
    return (
    <header>
        <nav>
            <img src="./react.png" width="40px"></img>
        </nav>
    </header>
    )
}

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
        <Header />
        <MainContent />
        <Footer />
        </>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))