import React from "react";

export default function Main() {
    return (
        <main>
            <h1 className="main--name">Mikhail Duev</h1>
            <h3 className="main--skill">Fullstack Developer</h3>
            <p className="main--site">mybc.space</p>
            <div className="main--buttons">
                <button className="main--b_mail"><img src="./images/Icon.png"></img>Email</button>
                <button className="main--b_ln"><img src="./images/ln.png"></img>LinkedIn</button>
            </div>
            <div className="main--description">
                <h2 className="main--title">About</h2>
                <p className="main--text">I am a frontend developer with a 
                    particular interest in making 
                    things simple and automating daily 
                    tasks. I try to keep up with security
                    and best practices, and am 
                    always looking for new 
                    things to learn.
                </p>
                <h2 className="main--title">Interests</h2>
                <p className="main--text">Food expert. Music scholar. 
                    Reader. Internet fanatic. 
                    Bacon buff. Entrepreneur.
                    Travel geek. Pop culture ninja. 
                    Coffee fanatic.
                </p>
            </div>
        </main>
    )
}