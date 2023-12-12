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
        <h3 style={{color: 'grey'}}>These are the Fundamental Building blocks of The React, 4 Fundamental Concepts every Developer must Understand</h3>

        <div id="conceptContainer">
          <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
          <CoreConcept image={CORE_CONCEPTS[1].image} title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}/>
          <CoreConcept image={CORE_CONCEPTS[2].image} title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description}/>
          <CoreConcept image={CORE_CONCEPTS[3].image} title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>
        </div>
        <h1>Examples</h1>
        <div>
        
        </div>
    </div>
    

    </>
  )
}

export default App
// we make four button and make all of them pass the numerucal value which correspons to there function in and mathc them up with the same in react -- then we get the value form the array just like that and  use it to idsplay stiff int he dynatmic content menu