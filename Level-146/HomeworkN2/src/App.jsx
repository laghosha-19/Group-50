import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Card.css'
import DrawRec from './DrawRec'

function App() {

  return (
    <>
      <DrawRec />

      <DrawRec width="400px" height="200px" color='red'></DrawRec>
      <DrawRec width="200px" height="300px" color='blue'></DrawRec>
      <DrawRec width="300px" height="500px" color='black'></DrawRec>

    </>
  )
}

export default App
