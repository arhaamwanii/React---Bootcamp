import React, { useDebugValue } from "react";
import img from "./assets/react-core-concepts.png";
import img2 from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx"
import { CoreConcept } from "./Components/CoreConcepts.jsx";
import TabButton from "./Components/TabButtons.jsx";

//this function here, gives us a random number between zero and two

function App() {

  function handleSelect(selectedButton){
    //slected buton containing
    console.log("Stuff here is in the Handle Select Function" )
  }
 
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
            <CoreConcept  {...CORE_CONCEPTS[1]}/>
            <CoreConcept  {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>

        {/* --2ND SECTION-- */}

        <section id="examples" >
          <h2>Exmaples</h2>
          <menu>
            <TabButton onSelect={handleSelect} buttonInfo="Components "/>
            <TabButton buttonInfo="JSX"/>
            <TabButton buttonInfo="Props"/>
            <TabButton buttonInfo="State"/>                
            <TabButton >--Trial Button--</TabButton>
           
          </menu>
          Dynamic Component
        </section>


      </main>
    </div>
  );
}

export default App;
 







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
