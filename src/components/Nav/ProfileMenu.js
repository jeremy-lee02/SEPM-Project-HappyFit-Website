import React from 'react'

const USER = JSON.parse(localStorage.getItem('profile'))
function DropdownMenu({onClick}) {
  return (
    <div className="relative w-fit z-1000 " onClick={onClick}>
      <div className=" z-1000 cursor-pointer hover:border-2 border-blue rounded-full ml-2">
        <img layout="fill" className=" w-12 h-12 rounded-full" alt="avatar"  src={USER.imageUrl}></img>
      </div>
      <div className='bg-blue absolute rounded-md w-24 '></div>
    </div>  
  )
}

export default DropdownMenu
