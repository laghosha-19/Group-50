import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const[name ,setname] = useState("")
  const [age,setage] = useState("")

  useEffect(() => {
    if (name.length >= 12 && parseInt(age) >= 18){
      console.log("Correct age and number");
    }else {
      console.log("wrong!")
    }
  },[name, age])

  return (
    <>
    <input type="text" name='name' onChange={(e) => setname(e.target.value)} placeholder='Enter Your Name:' value={name} />
    <input type="text" name='age' onChange={(e) => setage(e.target.value)} placeholder='Enter Age:' value={age} />
    </>
  )
}

export default App
