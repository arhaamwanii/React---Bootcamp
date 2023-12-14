import React from 'react'

function Header({onCLick , number}) {
  return (
    <div className='button' >
        <button onClick={onCLick} >Click Me</button>
    </div>
  )
}

export default Header

//