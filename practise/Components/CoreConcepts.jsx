import React from 'react'

function CoreConcept({header , image , discription}) {
  return (
    <div className='firstComopnent' >
      <img src={image} alt={discription} />    
      <h2>{header}</h2>
      <h3>{discription}</h3>
    </div>
  )
}

export default CoreConcept