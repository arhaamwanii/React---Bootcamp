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
    <img  style={{borderRadius: "10px"}} src="https://images.pexels.com/photos/990344/pexels-photo-990344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {GenRandomInt()} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

















//here we difined a function in the same file and then used it in the same file as a component in another function 
//it


//comment for another day 

//the quick brown fox jumped right over the lazy dog the quick brown fox juped rright over th laz yf
//comment for another day


//the quick brown fox jumped right over the lazy dog
//the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped righrt over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over you lazy dog the quick brown fox jumped right over the lazy dog the quick brown fox jumped right over the lazy dog the quick brown









