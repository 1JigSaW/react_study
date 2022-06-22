import React from "react";

export default function Main(props) {
    let upper = props.location.toUpperCase();
    return (
        <main>
            <div className="container-img">
                <img src={`${props.imageUrl}`} className="main--img"></img>
            </div> 
            <div className="container">  
                <img src="./images/flag.png" className="main--flag"></img>
                <span className="main--location">{upper}</span>
                <span><a href={`${props.googleMapsUrl}`} className="main--map">View on Google Maps</a></span>
                <h1 className="main--title">{props.title}</h1>
                <p className="main--date">{props.startDate} - {props.endDate}</p>
                <p className="main--description">{props.description}</p>
            </div>
        </main>
    )
}