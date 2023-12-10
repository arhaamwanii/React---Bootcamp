import React, { useDebugValue, useState } from "react";
import img from "./assets/react-core-concepts.png";
import img2 from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx"
import { CoreConcept } from "./Components/CoreConcepts.jsx";
import TabButton from "./Components/TabButtons.jsx";

function App() {

  const [dynamicText  , setDynamicText] = useState()
  const [dynamicHeading , setDynamicHeading] = useState(null)
  const [dynamicCode , setDynamicCode] = useState(null)


  function handleSelect(selectedButton){
    setDynamicText(CORE_CONCEPTS[selectedButton].description)
    setDynamicHeading(CORE_CONCEPTS[selectedButton].title )
    setDynamicCode(CORE_CONCEPTS[selectedButton].code)
  }

  console.log(dynamicText)

  return (

    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concept </h2>
        <ul>
          <CoreConcept 
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
          />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>

        {/* --2ND SECTION-- */}

        <section id="examples" >
          <h2>Exmaples</h2>
          <menu>

            <TabButton onSelect={() => handleSelect(0)} buttonInfo="Components "/>
            <TabButton onSelect={() => handleSelect(1)} buttonInfo="JSX" />
            <TabButton onSelect={() => handleSelect(2)} buttonInfo="Props"/> 
            <TabButton onSelect={() => handleSelect(3)} buttonInfo="State"/>                
            <TabButton onSelect={() => handleSelect("trial for the child property ")} >--Trial Button--</TabButton>
           
          </menu>
          {!dynamicText ? <p>This code will be showed when user has yet to enter any data</p> : null}
          {dynamicText ?
          <div id="tab-content">
            <h3>{dynamicHeading}</h3>
            <p>{dynamicText}</p>
            <pre>
              <code>
                {dynamicCode}
              </code>
            </pre>       
          </div> : null }
        </section>
      </main>
    </div>
  );
}

export default App;
 



//we have the use state of the heading name which by default contains nothing we apply a check on that i.e if it contains nothing we will show on the display nothing -- but if it contains something then that will not be showed instead something else will which in that case is the whole ass another section, -- unless we dont have aything in that variable which by default we dont then we put it in there via using its callback in the usestate function



{/* buttont to use the children propert in prop and use it recieve the data from the callback*/} 


        {/* --DYNAMIC CONTENT -- */}
        {/* we need to listen to the cliks inour custom buttons not to the build in buttons */}
        {/* at the end of the day we are just wrapping actual html elements in our react components  */}

//comment attempt

 //by using this sytax all the elements inside of the array CORE_CONCEPTS will passed as Key value pairs to the Call Back}
//we cant use the normal between opening and clsing tag as we have not rubjected  the told react where to use this shit 
//github comment protect 
//here we difined a function in the same file and then used it in the same file as a component in another function 
//all the components are not supposed to be in the same file

//da
//nnjnjnjn


// function CoreConcept(props) {
//   return(
//     <li>
//       <img src={props.image} alt="" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

//,,,,,

//what I have here -- and how I did it

//We have a header component for which we have made a seperate jsx and then exported it 
//then we have a another major componnent which is to say recieves -- arguments(we passed on these arguments in a bunch of ways) 
//PROPS to recieve these arguments and used them to modify the componont 
  //Porps is an object which contains all the values we use in an callback]
  //then we can acess those values like props.valueName -- here value name is the the name we decide to give it in the callback
  //all though -- if this is a component which is going to be used again and again -- then in that case we use the same callback stuff again and again every time we use the component


//what is going on here? is this a low dopamine state? --- but something is going on here 

//attempt to increase the number of comments on github
//anohter one -- this is the event to also do this  stuff to impress people
//but in order to do this we need
//most people thinkk world is a zero sum game but as it  turns out that is definetly not the case but what actally is true is that world is not a zero sum game but indeed a postive sum game which in that case, in ord3er for there to be winners it is not necessary to have loosers
