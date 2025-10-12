import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import { useState } from 'react'
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Fullpage from "./Components/FullPage"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Fullpage/>}>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    {/* <fullPage /> */}
    </>
  )
}

export default App
