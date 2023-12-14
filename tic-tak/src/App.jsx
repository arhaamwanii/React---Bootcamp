import React from "react"
import Header from "./Components/Header"
import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import Trial from "./Components/trial"

function App() {
  
  return (
    <>
    <Header/>
    <main>
      <div id="game-container">
        <ol id="players">
            <Player intialName="Player 1" symbol="x"/>
            <Player intialName="Player 2" symbol="o"/>
        </ol>

        <GameBoard/>
        <Trial/>
      </div>
    </main>
    </>
  )
}

export default App
