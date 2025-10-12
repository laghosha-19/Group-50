import React from "react";
import { Outlet, Link } from "react-router-dom";


function FullPage() {
    return (
        <>
            <header className="bg-indigo-600 p-3 gap-[15px] text-white font-bold">
                <ul className="flex justify-center items-center gap-5">
                    <Link to={"/"}>Home</Link>
                    <Link to={"about"}>About</Link>
                    <Link to={"contact"}>Contact</Link>
                </ul>
            </header>

            <Outlet/>

            <footer className="bg-indigo-600 p-3 mt-5 flex justify-center items-center text-white h-40 ">
                <ul className="flex justify-center items-center gap[15px]">
                    <li>About</li>
                    <li>Copyright</li>
                    <li>Terms & Conditions</li>
                </ul>
            </footer>
        </>
    )
}

export default FullPage