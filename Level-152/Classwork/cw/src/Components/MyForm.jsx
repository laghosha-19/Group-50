import React from "react";

function MyForm(){
    const handleSubmit = (event) => {
        // event.preventDefault()
        const formData = new FormData(event.target)
        console.log("Car:",formData.get("car") );
        console.log("Club:",formData.get("club"));
        console.log("Country",formData.get("country"));
    }
    return (
        <>
        {/* შექმენით MyForm კომპონენტი, რომელიც იქნება რაღაცა ფორმა. მომხმარებელს მოთხოვეთ, რომ შემოიყვანოს, რაღაცა ინფორმაცია, ვთქვა, მისი საყვარელი ხილი, მანქანა, ქვეყანა და ა.შ. onSubmit ზე დაარენდერეთ მომხმარებლის შემოყვანილი მნიშვნელობა  */}

        <form onSubmit={handleSubmit}>
            <input type="text" name="car" placeholder="Enter You'r Favorite Car"/>
            <input type="text"name="club" placeholder="Enter You'r Favorite Football Club "/>
            <input type="text" name="country" placeholder="Enter You'r Favorite Country"/>
            <button type="submit" >Submit</button>
        </form>
        </>
    )

}


export default MyForm