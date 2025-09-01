import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import "./Card.css"


function App() {

  return (
    <>
    {/* კომპონენთები არის აგურივით ცალ ცალკე გაკეთებული კომპონენთები გვეხმარება საბოლოოდ ავაწყოთ კომპლექსური საიტი,HTML ისგან ის აქვს განსხვავება რომ ის გვეწხმარება ერთ ფაილში არ დავწეროთ ყველაფერი,კარგი იმიტომ არის რომ დავყოთ რომ არ აგვერიოს კოდი და იყოს ლამაზად დაწერილი ასევე რაც მთავარია მარტივად გასაგები */}

    <Card/>
    </>
  )
}

export default App
