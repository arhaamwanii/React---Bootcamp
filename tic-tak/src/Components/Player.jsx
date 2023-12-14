import React from 'react'
import { useState } from 'react'


function Player({intialName , symbol}) {
    
    const [playerName , setPlayerName] = useState(intialName)
    const [isEditing , setIsEditing] = useState(false);
    
    const hadleEditCLick = () => {
        setIsEditing((useSyntax) => !useSyntax ) }

    const see = () => {  if (isEditing === true) {
        return <input type="text" value={intialName} />
    } else {
        return <span className="player-name">{intialName}</span>
    }}

  return (
    <li>
        <span className="player">
            {see()}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => setIsEditing(!isEditing)}>{ isEditing ? "Save" : "Edit" }</button>
        {console.log(isEditing)}
    </li>
  )
}

export default Player