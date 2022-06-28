import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const thingsArray = ["TH1", "TH2"]
  function addItem() {
    const thing = `Thing ${thingsArray.length + 1}`
    thingsArray.push(thing)
    console.log(thingsArray)
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))