import React from 'react'

function CoreConcept(header , image , discription) {
  return (
    <div>
      <img src={image} alt={discription} />    
      <h2>{header}</h2>
      <h3>{discription}</h3>
    </div>
  )
}

export default CoreConcept