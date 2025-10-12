import React from 'react'
import { Outlet, link } from 'react-router-dom'



function FPage() {
    return (
        <>
        <div className='w-full h-screen'>
        <header className='bg-green-500 flex justify-center'>
            <ul className='flex gap-5 p-5 font-bold text-xl cursor-pointer '>
                <li className='hover:bg-amber-400 duration-500 rounded-xl p-1'>Contact</li>
                <li className='hover:bg-amber-400 duration-500 rounded-xl p-1'>Main</li>
                <li className='hover:bg-amber-400 duration-500 rounded-xl p-1'>About</li>
            </ul>
        </header>



        <footer className='w-full mt-5 flex justify-center align-bottom font-bold text-2xl bg-green-500 '>
            <ul className='flex gap-30' >
                <div className='flex flex-col'>
                <li>Contact Us </li>
                <li>Companies</li>
                </div>
                <div className='flex flex-col' >
                <li>Head Quarters</li>
                <li>Terms And Conditions</li>
                </div>
            </ul>
        </footer>
        </div>
        </>
    )
}

export default FPage