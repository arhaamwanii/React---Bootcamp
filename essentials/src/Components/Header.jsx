import img from "../assets/react-core-concepts.png";

const reactDiscription = ["Fundamental" , "crutaial" , "core"]

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

export default Header;
  
  