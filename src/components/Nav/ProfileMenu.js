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

  
function Dropdown(IsOpen, setIsOpen) {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.clear();
    let path = '/Home'
    navigate(path)
    alert('Logged out successfull')
  }

  return (
    <>
    <div className="cursor-pointer ml-2 hover:border-double border-2 border-blue w-fit h-fit rounded-full">
    <img layout="fill" className=" w-12 h-12 rounded-full "  src={user.imageUrl}></img></div>
    <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial text-base pl-72'>
                  {['Schedule' , 'Profile'].map((item, index)=>(
                      <NavBarItems key = {item+index} title={item} />
                  ))}
                  <button onClick={handleLogout}>{user ? ('Logout') :''}</button>
        </ul>
    </>

  )
}

export default Dropdown
