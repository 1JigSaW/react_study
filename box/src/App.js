import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)

    const styles = {
      backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    function toggle(id) {
      // setSquares(prevSquares => {
      //   console.log(prevSquares)
      //     const newSquares = []
      //     for(let i = 0; i < prevSquares.length; i++) {
      //         const currentSquare = prevSquares[i]
      //         if(currentSquare.id === id) {
      //             const updatedSquare = {
      //                 ...currentSquare,
      //                 on: !currentSquare.on
      //             }
      //             newSquares.push(updatedSquare)
      //         } else {
      //             newSquares.push(currentSquare)
      //         }
      //     }
      //     return newSquares
      // })
      setSquares(prevSquares => {
        return  prevSquares.map((square) => {
          return square.id === id ? {...square, on: !square.on} : square
        })
      })
  }

    const squareElements = squares.map(square => (
      <Box styles={styles} key={square.id} id={square.id} on={square.on} toggle={() => toggle(square.id)}/>
    ))
    return (
        <main>
            <h1>Boxes will go here</h1>
            {squareElements}
        </main>
    )
}
