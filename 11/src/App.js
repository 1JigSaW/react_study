import React from "react";
import Contacts from "./components/Contacts";


function App() {
  return (
    <>
      <Contacts 
        image="./images/cat1.png" 
        name="Mr. Whiskerson"
        number="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
      />
      <Contacts 
        image="./images/cat2.png" 
        name="Fluffykins"
        number="(212) 555-2345"
        mail="fluff@me.com"
      />
      <Contacts 
        image="./images/cat3.png" 
        name="Felix"
        number="(212) 555-4567"
        mail="thecat@hotmail.com"
      />
      <Contacts 
        image="./images/cat4.png" 
        name="Pumpkin"
        number="(0800) CAT KING"
        mail="pumpkin@scrimba.meow"
      />
    </>
  )
}

export default App