import React from "react";
import { useState } from "react";
// import "tailwindcss"
import Agechecker from "./AgeChecker.css"

function AgeChecker() {
    const [age, setchecker] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(age === "")return 
        if(age  < 18 ){
            alert("You are not allowed ")
        }else alert ("You are allowed")
    }
    return (
        <>
            {/* 1) შექმენით AgeChecker კომპონენტი
            მომხმარებელს მოთხოვეთ თავისი ასაკი, onSubmit ზე:
            --> თუ არასრულწლოვანია გამოჩნდეს Toast(ვინც არ იცის დასერჩეთ Toast Ui) ის მსგავსი ელემენტი წითელი Background და ტექსტით - 'You Are Not Allowed`
            --> თუ სრულწლოვანია გამოჩნდეს Toast ის მსგავსი ელემენტი მწვანე Background და ტექსტით - `You Are Allowed`
            ასევე დაამატეთ reset ღილაკი, რათა მომხმარებელმა შეძლოს თავისი ასაკის ხელახლა შემოყვანა */}
            <div>
            <label htmlFor="age">Enter Your Age:</label>
            <input value={age} onChange={(e) => setchecker(e.target.value)} placeholder="Enter Age!" typ="text" name="age" id="age" />
            <button type="submit">Submit</button>
            </div>
        </>
    )
}

export default AgeChecker