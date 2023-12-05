import React from "react"

function Fuck(props){
    return(
      <>
      <h1>Hello this is a test to see how Props and spred operators actually work </h1>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p> {props.logic} </p>
      </>
    )
  }
  
  
  function DifferentFunction(){
    return(
      <div>
           <Fuck name="Arham" age="17" logic="they dont know me son"/>
            <Fuck name="Dayyan" age="13" logic="gotta gain moemntun in the right direction"/>

      </div>
    )
  }
  

  export default DifferentFunction;