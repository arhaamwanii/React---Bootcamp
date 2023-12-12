import React from 'react'
import { useState } from 'react'
import './App.css'
import CoreConcept from '../Components/CoreConcepts'

function App() {

  return (
    <>
    <div id="container">
        <h1>React Essentials</h1>
        <h3 style={{color: 'grey'}}>These are the Fundamental Building blocks of The React</h3>

        <div>
          <CoreConcept image="../assets/components.png"/>

        </div>

    </div>
    

    </>
  )
}

export default App
