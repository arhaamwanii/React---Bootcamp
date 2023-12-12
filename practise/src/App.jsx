import React from 'react'
import { useState } from 'react'
import './App.css'
import CoreConcept from '../Components/CoreConcepts'
import { CORE_CONCEPTS } from './data'
import TabButton from '../Components/TabButton';



function App() {

    const [ dynamicHeading , setDynamicHeading] = useState(null)
    const [ dynamicDisciription , setDynamicDiscription] = useState(null)
    const [ dynamicCode , setDynamicCode] = useState(null)

  function dynamicChange(buttonNo){
    setDynamicHeading(CORE_CONCEPTS[buttonNo].title)
    setDynamicDiscription(CORE_CONCEPTS[buttonNo].description)
    setDynamicCode(CORE_CONCEPTS[buttonNo].code)
  }

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
        <div id="buttons">
          <TabButton buttonInfo="Componetns" onClick={() => dynamicChange(0)} />
          <TabButton buttonInfo="JSX" onClick={() => dynamicChange(1)}/>
          <TabButton buttonInfo="Props" onClick={() => dynamicChange(2)}/>
          <TabButton buttonInfo="State" onClick={() => dynamicChange(3)}/>
        </div>

        {/* DYNAMIC CONTENT */}

        <div>
         <h1>{dynamicHeading}</h1>
        <h4>{dynamicDisciription}</h4>
        <pre>
          <code>
            {dynamicCode}
          </code>
        </pre>
        </div>
    </div>
    

    </>
  )
}

export default App
// we make four button and make all of them pass the numerucal value which correspons to there function in and mathc them up with the same in react -- then we get the value form the array just like that and  use it to idsplay stiff int he dynatmic content menu
// making a function which defines the value in the variables which will be displayed dynamicaly, once the value is decided it will be shown every time the fuction is called again 
//we cant call functions which have to use arguments directly in a callbak which is inside of a onClick in react because it will result in the function gettin gcalled mediatley so what we do is we lanuch a anonymous function which does not fire imediately which when called rsults in the actuall calback getting called
//giving different functions differents in this or maybe most cases is as simple as giving the function different argument on callback, giving the callback different argyment on different callback via differnt button clicks