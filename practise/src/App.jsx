import React from 'react'
import { useState } from 'react'
import './App.css'
import CoreConcept from '../Components/CoreConcepts'
import { CORE_CONCEPTS } from './data'

function App() {

  return (
    <>
    <div id="container">
        <h1>React Essentials</h1>
        <h3 style={{color: 'grey'}}>These are the Fundamental Building blocks of The React</h3>

        <div id="conceptContainer">
          <CoreConcept image={CORE_CONCEPTS[0].image} header={CORE_CONCEPTS[0].title} discription={CORE_CONCEPTS[0].description}/>
          <CoreConcept image={CORE_CONCEPTS[1].image} header={CORE_CONCEPTS[1].title} discription={CORE_CONCEPTS[1].description}/>
          <CoreConcept image={CORE_CONCEPTS[2].image} header={CORE_CONCEPTS[2].title} discription={CORE_CONCEPTS[2].description}/>
          <CoreConcept image={CORE_CONCEPTS[3].image} header={CORE_CONCEPTS[3].title} discription={CORE_CONCEPTS[3].description}/>
        </div>


    </div>
    

    </>
  )
}

export default App
