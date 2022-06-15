

function Header() {
    return (
    <header>
        <nav className="nav">
            <img src="./react.png" className="img_size"></img>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
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