import React from 'react'
import { useState } from 'react'

function Trial() {

    const [checkButton , setCheckButton ] = useState(true);

    function one(){
        if (checkButton) {
            return <h1>How are you today</h1>
        }else{
            return <h1>if i am alive i am fine</h1>
        }
    }

  return (
    <>
    {one()}
    <button onClick={setCheckButton(!checkButton)}>lets see</button>
    </>
  )
}

export default Trial