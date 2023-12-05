import React, { useDebugValue } from "react";
import img from "./assets/react-core-concepts.png";
import img2 from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx"

const reactDiscription = ["Fundamental" , "crutaial" , "core"]


//this function here, gives us a random number between zero and two
function GenRandomInt(max) {  
  max = reactDiscription[Math.floor(Math.random()* (3))]
  return(
    max
  )
}

console.log(GenRandomInt())

function CoreConcept({image , title , description}) {
  return(
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

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
                  <CoreConcept  {...CORE_CONCEPTS[1]}
                  //by using this sytax all the elements inside of the array CORE_CONCEPTS will passed as Key value pairs to the Call Back
            />  
            <CoreConcept  {...CORE_CONCEPTS[2]}
             />

          <CoreConcept
              {...CORE_CONCEPTS[3]}
             />
        </ul>
        </section>
      </main>
    </div>
  );
}


export default App;








//here we difined a function in the same file and then used it in the same file as a component in another function 
//all the components are not supposed to be in the same file




// function CoreConcept(props) {
//   return(
//     <li>
//       <img src={props.image} alt="" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }
