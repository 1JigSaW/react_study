import React from "react";

export default function Input() {
    return (
        <main>
            <form>
                <input type="text" className="main--input1" placeholder="Shut up"/>
                <input type="text" className="main--input2" placeholder="and take my money"/>
                <button className="main--button">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}