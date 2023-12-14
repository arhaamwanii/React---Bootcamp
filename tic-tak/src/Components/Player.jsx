import React from 'react'
import { useState } from 'react'



function Player({name , symbol}) {
    const [isEditing , setIsEditing] = useState(false);
   
    const see = () => {
        return isEditing ? (
          <input type="text" />
        ) : (
          <span className="player-name">{name}</span>
        );
      };
      
  return (
    <li>
        <span className="player">
            {see()}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        {console.log(isEditing)}
    </li>
  )
}

export default Player