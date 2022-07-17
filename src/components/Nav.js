import React from 'react'
import './Nav.css'
import { useState } from 'react'

import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';


const NavBarItems = ({title, classProps}) =>{
  return(
      <li className={`mx-3 cursor-pointer ${classProps}`}>
          <a href={`/${title}`}>{title}</a>
      </li>
  )
}

function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='relative'>
      {/* Create a navigation bar */}
      <div className='bg w-full flex md:justify-center justify-between items-center p-1 h-24 navBar'>
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
          <a href='/Home'><img src={require('../images/logo.jpg')}
          className ='cursor-pointer width' alt='logo' />
          </a>
        </div>
        <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial text-base'>
                  {['Home' , 'Exercises', 'Nutritions','Calculator', 'About Us' ].map((item, index)=>(
                      <NavBarItems key = {item+index} title={item} />
                  ))}
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
              {['Home' , 'Exercises', 'Nutritions','Calculator', 'About Us' ].map((item, index)=>(
                      <NavBarItems key = {item+index} title={item} classProps= "my-7 text-lg divide-y pt-2" />
              ))}

            </ul>
          )}

        </div>
      </div>
    </div>
  )
}

export default Nav