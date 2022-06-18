import React from "react";

export default function Joke(props) {
    return (
        <>
            <h1 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h1>
            <h1>Punchline: {props.punchline}</h1>
            <br/>
        </>
    )
}