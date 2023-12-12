import React from 'react'

function TabButton({buttonInfo , onClick}) {
  return (
    <div>
        <button onClick={onClick} >{buttonInfo}</button>
    </div>
  )
}

export default TabButton