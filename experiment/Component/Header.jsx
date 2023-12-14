import React from 'react'

function Header({onCLick}) {
  return (
    <div className='button' >
        <button onClick={onCLick} >Click Me</button>
    </div>
  )
}

export default Header