import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Component/Header'

  const [number , setNumber] = useState(0)
function App() {


  return (
    <>
     <Header number={number} onCLick={() => setNumber(number + 1) }/>
      <h1>{number}</h1>
    </>
  )
}

export default App
