import React from "react";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {
  const colors = ["Red", "Orange", "Yellow", "Green", "Blue"]
  const jokeElements = jokesData.map((joke) => {
    return <Joke
              setup={joke.setup}
              punchline={joke.punchline}
            />
  })
  return (
    <>
      {colors.map((color) => {
        return <h3>{color}</h3>
      })}
      {/* <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
        upvotes={10}
        downvotes={2}
      />
      <Joke 
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={false}
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={false}
      /> */}
      {jokeElements}
    </>
  );
}

export default App;
