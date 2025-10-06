import React from "react"
import { useState } from "react"

export default function CaseChanger(){
    let [text,setText] = useState("AFKJNA;KJ ENDF;KJ ANJ;DNFJAWBLBLAHBE LFJKNSDBACLJN sjhdbelfH B;LJB;JHB;jhbf; ew")
    let [isUpper,setUpper] = useState(true)
    const rame = () => {
        setText(isUpper ? text.toLowerCase() : text.toUpperCase())
        setUpper(!isUpper)
    }
    return(
        <>
        <p>{text}</p>
        <button onClick={rame}>click me </button>
        </>
    )
}

