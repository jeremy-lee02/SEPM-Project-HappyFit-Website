import React from 'react'
import {useNavigate} from 'react-router-dom'
import InputLogin from '../components/Login/InputLogin';
import ButtonLogin from '../components/Login/ButtonLogin';

function Login() {
    const navigate = useNavigate();
    const changeRoute = () =>{
      let path = '/Register'
      navigate(path)
    }
  return (
    <div className=' w-full h-screen bg-gray-800'>
      <div className=' items-center justify-center'>
        <div className='mt-24 text-white'>
        <h1 className='justify-center pt-5'>Login</h1>
        </div>
        <form action='' className='max-w-[550px] w-full mx-auto p-20 px-8 rounded-lg  bg-gray-900 mt-10'>
            <div className='flex flex-col py-2'>
              <InputLogin type={'text'} name={'loginUsername'} placeholder={'Email'}/>
            </div>
            <div className='flex flex-col py-2'>
              <InputLogin type={'password'} name={'loginPassword'} placeholder={'Password'}/>
            </div>
            <ButtonLogin onClick={'submit'} text={'Sign In'}/>
            <div>
            <button className='text-white hover:text-blue p-2' onClick={changeRoute}>Doesn't have an account?</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
