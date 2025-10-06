import React from 'react'
import { useState } from 'react'

function App() {
  let [name,setName] = useState("")

  return (
    <>
    <button onClick={() =>setName("Luka laghoshvili")}>click for name</button>
    <h1>{name}</h1>
    </>
  )
}

export default App
