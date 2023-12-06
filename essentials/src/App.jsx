import React, { useDebugValue } from "react";
import img from "./assets/react-core-concepts.png";
import img2 from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx"
import { CoreConcept } from "./Components/CoreConcepts.jsx";





//this function here, gives us a random number between zero and two



function App() {
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
            <CoreConcept  {...CORE_CONCEPTS[1]}  />
                 
             
            <CoreConcept  {...CORE_CONCEPTS[2]}
             />

          <CoreConcept
              {...CORE_CONCEPTS[3]}
             />
        </ul>
        </section>

        {/* --2ND SECTION-- */}

        <section id="example" >
          <h2>Exmaples</h2>
          <menu>

          </menu>
        </section>


      </main>
    </div>
  );
}

 //by using this sytax all the elements inside of the array CORE_CONCEPTS will passed as Key value pairs to the Call Back}

export default App;










//github comment protect 
//here we difined a function in the same file and then used it in the same file as a component in another function 
//all the components are not supposed to be in the same file

//damn it just zones in the mind like nothing else exists in that movement.. neural pathways that have been formed over years of usage just get activated and go fuck yourself you aint doing shit after that yeah... there is a big mental side to this as well




// function CoreConcept(props) {
//   return(
//     <li>
//       <img src={props.image} alt="" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }



//what I have here -- and how I did it

//We have a header component for which we have made a seperate jsx and then exported it 
//then we have a another major componnent which is to say recieves -- arguments(we passed on these arguments in a bunch of ways) 
//PROPS to recieve these arguments and used them to modify the componont 
  //Porps is an object which contains all the values we use in an callback]
  //then we can acess those values like props.valueName -- here value name is the the name we decide to give it in the callback
  //all though -- if this is a component which is going to be used again and again -- then in that case we use the same callback stuff again and again every time we use the component


