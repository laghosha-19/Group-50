import React from "react";


function User({name,bio = "no bio", age = 18}){
    return(
        <div>
            <h1>Name:{name}</h1>
            <h2>bio: {bio}</h2>
            <h3>age: {age}</h3>
        </div>
    )
}