import React from "react";

export default function Contacts(props) {
    console.log(props)
    return (
        <div className="contacts">
      
          <div className="contact-card">
              <img src={props.image}/>
              <h3>{props.name}</h3>
              <div className="info-group">
                  <img src="./images/phone-icon.png" />
                  <p>{props.number}</p>
              </div>
              <div className="info-group">
                  <img src="./images/mail-icon.png" />
                  <p>{props.mail}</p>
              </div>
          </div>
          
          
          
      </div>
    )
}