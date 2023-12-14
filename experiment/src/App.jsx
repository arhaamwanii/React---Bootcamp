import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Component/Header'


function App() {
  const [number , setNumber] = useState(0)

  return (
    <>
     <Header onClick={() => setNumber(number + 1) }/>
      <h1>{number}</h1>
    </>
  )
}

export default App
