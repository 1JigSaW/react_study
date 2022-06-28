import React from "react";
import memesData from "../memesData";

export default function Input() {
    let url;
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <main>
            <form>
                <input type="text" className="main--input1" placeholder="Shut up"/>
                <input type="text" className="main--input2" placeholder="and take my money"/>
                <button onClick={getMemeImage} className="main--button">Get a new meme image 🖼</button>
                <p>{url}</p>
            </form>
        </main>
    )
}