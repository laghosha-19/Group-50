import React from "react";
import { useState } from "react";


export default function Greeting(){

    const [value,setValue] = useState("") 
    return(
        <>
        <form>
            <input onChange={(e)=>setValue(e.target.value)} type="text" id="name" placeholder="Enter name" value={value}/>
            <p>Hello, {value} Welcome</p>
        </form>
        </>
    )
}

