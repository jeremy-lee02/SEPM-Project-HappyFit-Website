import React from 'react'
import {useNavigate} from 'react-router-dom'
import ButtonLogin from '../components/Login/ButtonLogin';
import InputLogin from '../components/Login/InputLogin';

function Register() {
  const navigate = useNavigate();
  const changeRoute = () =>{
    let path = '/Login'
    navigate(path)
  }
  return (
    <div className=' w-full h-screen bg-gray-800'>
      <div className=' items-center justify-center'>
        <div className='mt-24 text-white'>
        <h1 className='justify-center pt-5'>Register</h1>
        </div>
        <form action='' className='max-w-[550px] w-full mx-auto p-20 px-8 rounded-lg  bg-gray-900 mt-10'>
        <div className='flex gap-4'>
            <div className='py-2'>
              <InputLogin type={'text'} name={'firstName'} placeholder={'First name'}/>
            </div>
            <div className='py-2'>
              <InputLogin type={'text'} name={'lastName'} placeholder={'Last name'}/>
            </div>
        </div>
        <div className='flex flex-col py-2'>
          <InputLogin type={'email'} name={'email'} placeholder={'Email'}/>
        </div>
        <div className='flex flex-col py-2'>
          <InputLogin type={'password'} name={'registerPassword'} placeholder={'Password'}/>
        </div>
        <div className='flex flex-col py-2'>
          <InputLogin type={'password'} name={'retypePassword'} placeholder={'Retype Password'}/>
        </div>
        <div>
          <ButtonLogin text={"Create"}/>
        </div>
        <div>
        <button className='text-white hover:text-blue p-2' onClick={changeRoute} >Already have an acconut?</button>
        </div>
            
        </form>
      </div>
    </div>
    
  )
}

export default Register
