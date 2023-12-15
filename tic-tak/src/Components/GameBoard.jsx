import React from 'react'

const initalGameBoard = [
    [null , null , null ],
    [null , null , null ],
    [null , null , null ],
]

function GameBoard() {
  return (
    <ol id='game-board'>
        {initalGameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol , colIndex) => <li key={colIndex}> <button>{playerSymbol}</button> </li>)}
        </ol>
        </li>)}

    </ol>
  )
}

export default GameBoard

//in the end we alll die what