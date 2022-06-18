import React from "react";
import Joke from "./components/Joke";

function App() {
  return (
    <>
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={[{author: "", body: "", title: ""}, {...}]}
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
      />
    </>
  );
}

export default App;
