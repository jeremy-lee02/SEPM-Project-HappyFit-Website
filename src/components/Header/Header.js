import React from 'react'
import './Header.css'

function Header({content1, content2, classProp}) {
  return (
    // Header component
    <div className='mt-24 w-full h-auto relative'>
        <img src= {require('../../images/headpage.png')} alt = 'Per pic' className='object-cover md:shrink-0 img_height w-full brightness-75' />
        <div className='absolute w-full h-auto bottom-5'>
            <h1 className='sm:text-5xl pb-8 font-bold text-white flex md:justify-center drop-shadow-lg'>{content1}</h1>
            <h2 className={classProp}>{content2}</h2>
        </div>
  </div>
  )
}
export default Header