import React from 'react'
import {useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'

function Home() {
  let navigate = useNavigate();
  const changeRoute = () => {
    let path ;
    if (JSON.parse(localStorage.getItem('profile')))  {
      path = '/Exercises'
    }else {
      path = '/Login'
    }
    navigate(path);
  }
  return (
    <>
      <Header content1={'Anywhere, Anytime!'} content2 = {'Since 2022'} classProp ={'sm:text-3xl pb-8 font-light text-white flex md:justify-center drop-shadow-lg'} />
      {/* Content */}
      <div className='bg-gray-800 text-white'>
        {/* Content 1 */}
        <div className='flex flex-col md:flex-row flex-auto pt-5 md:hover:drop-shadow-lg'>
          {/* Left  */}
          <div className='flex md:flex-initial w-full'>
              <img src={require('../images/pic1.png')} alt='pic 1' className='md:pl-5 w-5/6 pl-5'/>
          </div>
          {/* Right */}
          <div className='flex w-full md:pl-2 text-left pt-5 items-center justify-center italic flex-col'>
            <p className='pb-3 text-xl inline-flex'>
              “Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.”
            </p>
            <span>-Jack LaLanne</span>
            <button className='bg-blue hover:bg-blue-700 hover:drop-shadow-lg mt-2 focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded-md' onClick={changeRoute}>Start your workout!</button>
          </div>
        </div>
        {/* Content 2 */}
        <div className='pt-10 flex flex-col-reverse md:flex-row flex-auto pb-8 flex-row-reverse md:hover:drop-shadow-lg rounded-md'>
          {/* Left */}
          <div className='flex w-full md:pl-11 text-left pt-5 item-center justify-center italic flex-col'>
          <p className='pb-3 text-xl inline-flex'>
          “Diet is the essential key to all successful healing. Without a proper balanced diet, the effectiveness of herbal treatment is very limited.”
            </p>
            <span>–Michael Tierra</span>
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