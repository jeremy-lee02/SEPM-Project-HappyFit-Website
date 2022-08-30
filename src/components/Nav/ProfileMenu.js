import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { useState} from 'react'
import {Menu} from '@headlessui/react'

const NavBarItems = ({title, classProps}) =>{
 
  return(
      <li className={`text-white mx-3 cursor-pointer ${classProps} hover:text-blue drop-shadow-lg`}>
          <Link to={`/${title}`} className="hover:drop-shadow-lg">{title}</Link>
      </li>
  )
}

  
function DropdownMenu() {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.clear();
    let path = '/Home'
    navigate(path)
    alert('Logged out successfull')
  }

  return (
    <Menu >
      <div className="relative w-fit z-1000 ">
    <Menu.Button className=" z-1000 cursor-pointer hover:border-2 border-blue  rounded-full">
    <img layout="fill" className=" w-12 h-12 rounded-full" alt="avatar"  src={user.imageUrl}></img></Menu.Button>
    <div className='bg-blue absolute rounded-md w-24 '>
      <div className='z-1000 '>
          <Menu.Items className=' block item-center '>
            {['Schedule'].map((item, index)=>(
                <NavBarItems key = {item+index} title={item} />
              ))}</Menu.Items>
          <Menu.Items className=' block item-center '>
            {['Profile'].map((item, index)=>(
                <NavBarItems key = {item+index} title={item} />
              ))}</Menu.Items>
              <Menu.Items className='text-white ml-3 hover:text-blue'> <button onClick={handleLogout}>{user ? ('Logout') :''}</button> </Menu.Items>
        </div></div></div>
    </Menu>
  
  )
}

export default DropdownMenu
