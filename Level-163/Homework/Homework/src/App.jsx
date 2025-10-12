import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import FPage from "./Components/FPage"


function App() {

  return (
    <>
    <FPage/>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
