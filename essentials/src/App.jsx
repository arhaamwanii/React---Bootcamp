function Header(){
  return(
    <header>
    <img  style={{borderRadius: "10px"}} src="https://images.pexels.com/photos/18010956/pexels-photo-18010956/free-photo-of-woman-in-white-veil-standing-in-doorway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      Fundamental React concepts you will need for almost any app you are
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