import { useState } from 'react'
import './App.css'
import Header from './Component/Header'

  
function App() {
const [number , setNumber] = useState(0)

  return (
    <>
     <Header number={number} onCLick={() => setNumber(number + 1) }/>
      <h1>{number}</h1>
    </>
  )
}

export default App
