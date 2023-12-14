import React from 'react'

function Header({onCLick , number ="arhma"}) {
  return (
    <div  >
        <button onClick={onCLick} >Click Me</button>
        <h1>{number}</h1>
    </div>
  )
}

export default Header

