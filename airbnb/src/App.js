import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    const cards = data.map((card) => {
        return <Card 
            image={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            country={card.location}
            title={card.title}
            price={card.price}
        />
    })
    return (
        <>
            <Header />
            <Main />
            <section className="cards-list">
                {cards}
            </section>
        </>
    )
}