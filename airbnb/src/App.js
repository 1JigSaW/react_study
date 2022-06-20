import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";

export default function App() {
    return (
        <>
            <Header />
            <Main />
            <Card 
                image="image1.png"
                rating="5.0"
                reviewCount={6}
                country="England"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </>
    )
}