import React from "react"
import img from "./assets/config.png"


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

function CoreConcept() {
  return(
    <li>
      <img src="" alt="" />
      <h3>Title</h3>
      <p>Discrption</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts"></section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;




//here we difined a function in the same file and then used it in the same file as a component in another function 





