import React from 'react'
import './Header.css'

function Header() {
  return (
    // Header component
    <div className='pt-24 w-full h-auto relative'>
        <img src= {require('../images/headpage.png')} alt = 'Per pic' className='object-cover md:shrink-0 img_height w-full brightness-75' />
        <div className='absolute w-full h-auto bottom-5'>
            <h1 className='sm:text-5xl pb-8 font-bold text-white flex md:justify-center drop-shadow-lg'>Anywhere, Anytime!</h1>
            <h2 className='sm:text-3xl pb-8 font-light text-white flex md:justify-center drop-shadow-lg'>Since 2022.</h2>
        </div>
  </div>
  )
}
export default Header