import React from 'react'

function Header() {
  return (
    <div className='pt-24 w-full h-auto relative'>
        <img src= {require('../images/headpage.png')} alt = 'Per pic' className='object-cover md:shrink-0' />
        <div className='absolute w-full h-auto bottom-0'>
            <h1 className='sm:text-5xl font-bold text-black flex justify-center'>Anywhere, Anytime!</h1>
            <h2 className='sm:text-3xl font-bold text-black flex justify-center'>Since 2022.</h2>
        </div>
  </div>
  )
}
export default Header