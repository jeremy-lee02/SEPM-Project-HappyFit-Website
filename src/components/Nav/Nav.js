import React from 'react'
import './Nav.css'
import { useState,useEffect } from 'react'
import {useNavigate, Link, useLocation } from 'react-router-dom'
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import ProfileMenu from './ProfileMenu';



const NavBarItems = ({title, classProps}) =>{

  return(
      <li className={`text-white mx-3 cursor-pointer ${classProps} hover:text-blue drop-shadow-lg`}>
          <Link to={`/${title}`} className="hover:drop-shadow-lg">{title}</Link>
      </li>
  )
}

function Nav() {
  const refreshPage = ()=>{
    window.location.reload();
 }
  const location = useLocation();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [isLog,setIslog] = useState(false)
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const handleLogout=()=>{
    localStorage.clear();
    let path = '/Home'
    navigate(path)
    alert('Logged out successfull')
  }
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  return (
    <div className='relative'>
      {/* Create a navigation bar */}
      <div className='bg w-full flex md:justify-center justify-between items-center p-1 h-24 navBar z-1000 '>
        <div className='md:flex  justify-center items-center'>
          <Link layout="fill"  to='/Home'><img src={require('../../images/logo.png' )}
          className ='cursor-pointer width' alt='logo' />
          </Link>
        </div>
        <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial text-base pl-72 z-1000'>
                  {['Exercises', 'Nutritions','Calculator', 'About Us' ].map((item, index)=>(
                      <NavBarItems key = {item+index} title={item} />
                  ))}
                 {user ? <ProfileMenu/> :<NavBarItems title={"Login"} />}
               
        </ul>
        {/* Create responsive nav bar */}
        <div className='flex-relative relative'>
          {toggle 
            ? <AiOutlineClose fontSize={28} className ="md:hidden mr-5 text-color" onClick={()=>setToggle(false)} />
            : <HiMenuAlt4 fontSize={28} className ="text-white md:hidden cursor-pointer" onClick={()=>setToggle(true)} />
          }
          {toggle && (
            <ul className='z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md white-glassmorphism'>
              <li className='text-xl w-full my-2 pt-3'>
                <AiOutlineClose fontSize={28} className ="text-white cursor-pointer" onClick={()=>setToggle(false)} />
              </li>
              {['Home' , 'Exercises', 'Nutritions','Calculator', 'About Us',`${user ? ('Schedule') :'Login'}`, `${user ? ('Profile') :''}`].map((item, index)=>(
                      <NavBarItems key = {item+index} title={item} classProps= "my-5 text-lg divide-y pt-2 z-1000" />
              ))}
             <button className = 'text-xl w-full pl-72 my-5 text-white mx-3 cursor-pointer hover:text-blue drop-shadow-lg' onClick={handleLogout}>{user ? ('Logout') :''}</button>
            </ul>
          )}

        </div>
      </div>
    </div>
  )
}
export default Nav