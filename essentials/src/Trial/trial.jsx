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
     <p></p>
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1> <i>TRIAL CODE</i> </h1>
           <Fuck name="Arham" age="17" logic="they dont know me son"/>
            <Fuck name="Dayyan" age="13" logic="gotta gain moemntun in the right direction"/>
        <h1><i>TRIAL CODE</i> </h1> */}
      </div>
    )
  }
  

  export default DifferentFunction;