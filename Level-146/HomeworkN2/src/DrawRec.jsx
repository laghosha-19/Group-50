import React from "react"
import "./Card.css"

function DrawRec(props){
    const style = {
        width:props.width,
        height:props.height,
        backgroundColor:props.color
    }
    return(
        <div style={style} id="ant"></div>
    )
}

export default Card