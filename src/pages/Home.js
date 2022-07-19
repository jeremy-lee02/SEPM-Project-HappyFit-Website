import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
  let navigate = useNavigate();
  const changeRoute = () => {
    let path = `/Exercises`; 
    navigate(path);
  }
  return (
    <>
      <Header />
      {/* Content */}
      <div>
        <div className='flex flex-col md:flex-row flex-auto'>
          {/* Left  */}
          <div className='flex md:flex-initial'>
              <img src={require('../images/pic1.png')} alt='pic 1' className='pl-8 w-full'/>
          </div>
          {/* Right */}
          <div className='flex w-full md:pl-14 text-left pt-5 items-center justify-center italic flex-col'>
            <p className='pb-3 text-xl'>
              "Anywhere, Anytime"
            </p>
            <button className='bg-blue hover:bg-blue-700 focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded-md' onClick={changeRoute}>Start your workout!</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home