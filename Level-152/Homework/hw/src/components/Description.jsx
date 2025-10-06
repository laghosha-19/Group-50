import React from "react";
import { useState } from "react";

export default function Description () {
    const [inputvalue,setInputvalue] = useState("")
    const [desc,setdesc] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputvalue == ""){
            setdesc("No Description")
        }else{setdesc ({inputvalue})}
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <p>your description is:{desc}</p>
            <textarea onChange={(e) => setInputvalue(e.target.value)} value={inputvalue} name="desc" id="">Enter name</textarea>
            <button type="submit">click</button>
            </form>
        </>
    )
}