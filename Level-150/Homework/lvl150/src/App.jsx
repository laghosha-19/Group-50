import { useState } from 'react'
import './index.css'
import CaseChanger from "./components/CaseChanger"

function App() {
  let [doubler, setDouble] = useState(2)

  return (
    <>
      <h1 className='bg-red-200'>Hello</h1>
      {/* 1) რა არის state React ში და რითი განსხვავდება იგი props გან?
    ნიშნავს შდა მდგომარეობას მონაცემები რომელიც მხოლოდ კომპონენტს ეკუთვნის,props-ისგან იმით განსხვავდება რომ ის იცვლება 
    */}
      {/* 2) რა არის useState? რატომ ვიყენებთ/ რა პრობლემას აგვარებს?
    useState არის react ის hook ის უფრო სწრაფია ზედმეტი კოდის წერას გვარიდებს 
    */}
      {/* 3) რას აბრუნებს useState ფუნქცია? 
    აბრუნებს იმ value-ს რასაც გადავცემთ
    */}
      {/* 4) რატომ არ უნდა შევცვალოთ state პირდაპირ? (მაგ. count++) 
    არ იმუშავებს 
    */}
      {/* 5) რა ემართება კომპონენტს, როცა state იცვლება?
    რეაქთი შეამჩნევს ცვლილებებს და გაკეთდება rerender
    */}
      {/* 6) ეკრანზე გამოაჩინეთ რიცხვი 2; შექმენით ღილაკი.
    --> ამ ღილაკზე ყოველ დაჭერისას რიცხვი გაორმაგდეს.*/}
      <h1>{doubler}</h1>
      <button onClick={() => setDouble(doubler * 2)} >Click me </button>
      <button onClick={() => setDouble(2)}>reset</button>
      {/* 7) შექმენით CaseChanger კომპონენტი. ეკრანზე გამოაჩინეთ რაიმე გრძელი ტექსტი + ღილაკი.
      --> ღილაკზე დაჭერით თუ ტექსტი UPPERCASE არის უნდა და_lowercase_დეს და თუ lowercase არის უნდა და_UPPERCASE_დეს. */}
      <CaseChanger/>
    </>
  )
}

export default App
