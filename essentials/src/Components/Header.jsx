
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
  
  