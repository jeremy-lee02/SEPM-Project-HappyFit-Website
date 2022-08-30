import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { useState} from 'react'

const NavBarItems = ({title, classProps}) =>{
 
  return(
      <li className={`text-white mx-3 cursor-pointer ${classProps} hover:text-blue drop-shadow-lg`}>
          <Link to={`/${title}`} className="hover:drop-shadow-lg">{title}</Link>
      </li>
  )
}

function DropdownMenu({onClick}) {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.clear();
    let path = '/Home'
    navigate(path)
    alert('Logged out successfull')
  }

  return (
    
      <div className="relative w-fit z-1000 " onClick={onClick}>
    <div className=" z-1000 cursor-pointer hover:border-2 border-blue rounded-full ml-2">
    <img layout="fill" className=" w-12 h-12 rounded-full" alt="avatar"  src={user.imageUrl}></img></div>
    <div className='bg-blue absolute rounded-md w-24 '></div></div>  
  )
}

export default DropdownMenu
