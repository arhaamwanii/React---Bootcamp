import React from 'react'
import { useState } from 'react'


function Player({intialName , symbol}) {
    
    const [playerName , setPlayerName] = useState(intialName)
    const [isEditing , setIsEditing] = useState(false);
    
    function hadleEditCLick  () {
        setIsEditing((useSyntax) => !useSyntax ) }
        
    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);

    }

    const see = () => {  if (isEditing === true) {
        return <input type="text" value={playerName} onChange={handleChange} />
    } else {
        return <span className="player-name">{playerName}</span>
    }}

  return (
    <li>
        <span className="player">
            {see()}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => setIsEditing(!isEditing)}>{ isEditing ? "Save" : "Edit" }</button>
        
    </li>
  )
}

export default Player

// logic one 
// we display two things here based on a click we diecide which one to show, we have a button and
//in the end we all die
//in end we all die
//all we have is a good deal 
//in the end we all die
