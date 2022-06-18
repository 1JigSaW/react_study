import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img src="../images/image1.png" className="card--image"></img>
            <div className="card--reviews">
                <img src="./images/star.png" className="card--star"></img>
                <span>5.0 </span>
                <span className="gray">(6) - </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}