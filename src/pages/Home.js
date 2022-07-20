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
      <Header content1={'Anywhere, Anytime!'} content2 = {'Since 2022'} classProp ={'sm:text-3xl pb-8 font-light text-white flex md:justify-center drop-shadow-lg'} />
      {/* Content */}
      <div className='bg-black'>
        {/* Content 1 */}
        <div className='flex flex-col md:flex-row flex-auto pt-5 md:hover:drop-shadow-lg'>
          {/* Left  */}
          <div className='flex md:flex-initial'>
              <img src={require('../images/pic1.png')} alt='pic 1' className='pl-11 w-full'/>
          </div>
          {/* Right */}
          <div className='flex w-full md:pl-14 text-left pt-5 items-center justify-center italic flex-col'>
            <p className='pb-3 text-xl'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <button className='bg-blue hover:bg-blue-700 hover:drop-shadow-lg focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded-md' onClick={changeRoute}>Start your workout!</button>
          </div>
        </div>
        {/* Content 2 */}
        <div className='pt-10 flex flex-col-reverse md:flex-row flex-auto pb-8 flex-row-reverse md:hover:drop-shadow-lg rounded-md'>
          {/* Left */}
          <div className='flex w-full md:pl-11 text-left pt-5 item-center justify-center italic flex-col'>
          <p className='pb-3 text-xl'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          {/* Right */}
          <div className='flex md:flex-initial'>
            <img src={require('../images/pic2.png')} alt='pic 1' className='md:pr-14 w-full pl-14'/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home