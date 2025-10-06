import { useState } from 'react'
import Greeting from "./components/Greeting"
import Description from "./components/Description"

function App() {


  return (
    <>
    <Greeting />
    <Description />
      {/* 1) რა განსხვავებაა input-ის value და placeholder-ს შორის?
    input-ის value არის როდესაც მომხარებელი შემოიტანს ინფორმაციას input-ში ხოლო laceholder არის როდესაც ინპუთში ვუწერთ შიგნით მოკლე ტექსტს თუ რა ინფორმაცია უნდა შეიტანოს მომხმარებელმა input-ში
    */}
      {/* 2) რას აკეთებს onChange ფუნქცია?
    ყოველ შეცვლაზე აკეთებს მითითებულ ფუნქციას
    */}
      {/* 3) როგორ შეგვიძლია ვაკონტროლოთ input-ის მნიშვნელობა React-ში? 
    input მნიშვნელობა ინახება state-ში და ყოველ ახალ მონაცემზე ახლდება 
    */}
      {/* 4) შექმენით Greeting კომპონენტი.
      შექმენით form ერთი input ით
      --> მომხმარებელი წერს თავის სახელს, და ეკრანზე იმავე დროს გამოჩნდება შეტყობინება.
      --> ყოველ ახალ დაწერილ სიმბოლოზე ხელახლა უნდა დარენდერდეს - `Hello, {name}` */}
      {/* 5) შექმენით Description კომპონენტი.
      შექმენით form ერთი textarea და submit ღილაკით, ასევე p ტეგი
      --> p ტეგში თავიდან უნდა ეწეროს No Description
      --> როცა მომხმარებელი ჩაწერს ტექსტს და დაასაბმითებს ამ p ტეგის მნიშვნელობა უნდა გახდეს `Your Description: {desc}` */}
    </>
  )
}

export default App
