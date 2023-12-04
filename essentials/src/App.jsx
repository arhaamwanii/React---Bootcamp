import React from "react";
import img from "./assets/react-core-concepts.png";
import img2 from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

const reactDiscription = ["Fundamental" , "crutaial" , "core"]


//this function here, gives us a random number between zero and two
function GenRandomInt(max) {
  
  max = reactDiscription[Math.floor(Math.random()* (3))]
  return(
    max
  )
}


console.log(GenRandomInt())

function Header(){
  return(
    <header>
    <img  style={{borderRadius: "10px"}} src={img} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {GenRandomInt()} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}

function CoreConcept(props) {
  return(
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.descriptin}</p>
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
           title={CORE_CONCEPTS[0].title}
            descriptin={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
                  <CoreConcept
           title={CORE_CONCEPTS[1].title}
            descriptin={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
            />  
            <CoreConcept
            title={CORE_CONCEPTS[2].title}
             descriptin={CORE_CONCEPTS[2].description}
             image={CORE_CONCEPTS[2].image}
             />

          <CoreConcept
            title={CORE_CONCEPTS[3].title}
             descriptin={CORE_CONCEPTS[3].description}
             image={CORE_CONCEPTS[3].image}
             />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;




//here we difined a function in the same file and then used it in the same file as a component in another function 





