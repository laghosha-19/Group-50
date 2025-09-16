import { useState } from 'react'
import User from "./User.jsx"

function App() {

  return (
    <>
      <User name="user N1" age={16} bio="not found" />
      <User name="user N2"bio="not found" />
      <User name="user N3" age={19} bio="not found" />
      <User name="user N4" age={17}  />
      <User name="user N5" />
    </>
  )
}

export default App
