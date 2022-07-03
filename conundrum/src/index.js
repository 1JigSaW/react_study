import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [thingsArray, setThingsArray] = React.useState(["TH1", "TH2"])
  function addItem() {
    // const thing = `Thing ${thingsArray.length + 1}`
    // thingsArray.push(thing)
    // console.log(thingsArray)
    setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])

  }
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))