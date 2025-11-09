import { useState } from 'react'

function App() {

  return (
    <>
      <div class="Sign-up" className='text-white bg-black text-[14px] text-center p-1.5'>
        Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a>
      </div>
      <header className='w-full h- flex gap-6 justify-center items-center p-2 pt-4 bg-white'>
        <h1 className='font-Lexen text-3xl '>SHOP.CO</h1>
        <p>Shop</p>
        <p>On Sale</p>
        <p>New Arrivals</p>
        <p>Brands</p>
        <div className='flex gap-4 pl-2 pr-[180px] pt-1 pb-1 rounded-2xl bg-gray-200'>
        <span className='opacity-35' > <i class="fa-solid fa-magnifying-glass"> </i></span>
        <input type="text" placeholder='Search for products...' />
        </div>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-user"></i>
      </header>
      <section className='' class="hero">
      <h2 className='font-Lexen'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
      <p className='font-LexenNormal'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <button className='bg-black text-white rounded-4xl cursor-pointer pt-1.5 pb-1.5 pl-[40px] pr-[40px]'>Shop Now</button>
      <div>
        <div>
          <p>200+</p>
          <p>International Brands</p>
        </div>
        <div>
          <p>2,000+</p>
          <p>High-Quality Products</p>
        </div>
        <div>
          <p>30,000+</p>
          <p>Happy Customers</p>
        </div>
      </div>
      <img src="" alt="" />
      </section>
    </>
  )
}

export default App
