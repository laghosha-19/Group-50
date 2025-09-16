import React from "react";

function Container({ children }) {
    console.log(children)
    return (
        <div className="Card">
            <h1>Card Info:</h1>
            {children}
        </div>
    )
}
export default Container
