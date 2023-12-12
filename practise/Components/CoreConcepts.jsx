import React from 'react'

function CoreConcept({title , image , description}) {
  return (
    <div className='firstComopnent' >
      <img src={image} alt={description} />    
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  )
}

export default CoreConcept;