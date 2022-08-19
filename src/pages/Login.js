import React from 'react'
import {useNavigate} from 'react-router-dom'
import InputLogin from '../components/Login/InputLogin';
import ButtonLogin from '../components/Login/ButtonLogin';
import {useState} from 'react';
import axios from 'axios';

function Login() {
  const [message,setMessage] = useState('');
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const refreshPage = ()=>{
    window.location.reload();
 }
    const navigate = useNavigate();
    const changeRoute = () =>{
      let path = '/Register'
      navigate(path)
    }
   
const handleLogin = async (e) =>{
  e.preventDefault();
  try{
    

    const data = await axios.post(
      "https://happy-fit-api-v2.herokuapp.com/auth/login",
      {email,password}
    );
    if(data) {
    
    setUser(data.data)
    const displayInfo = {
      id: user._id,
      email: user.email,
      password: user.password,
      token: user.accessTok,
      firstname: user.firstname,
      lastname: user.lastname,
      imageUrl: user.imageUrl
    }
    console.log(displayInfo)
    localStorage.setItem('profile',JSON.stringify(displayInfo))
;}
    let path = '/Exercises'
    navigate(path)
    }
  catch(e){
    console.log(e)
    setMessage('Login  failed!  Try  again.')
  };
}
  return (
    <div className=' w-full h-screen bg-gray-800'>
      <div className=' items-center justify-center'>
        <div className='mt-24 text-white'>
        <h1 className='justify-center pt-5'>Login</h1>
        </div>
        <form action='' className='max-w-[550px] w-full mx-auto p-20 px-8 rounded-lg  bg-gray-900 mt-10' onSubmit={handleLogin}>
            <div className='flex flex-col py-2'>
              {message && <div className='justify-center text-red '>{message}</div>}
              <InputLogin 
              type={'text'} 
              name={'email'} 
              placeholder={'Email'} 
              onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col py-2'>
              <InputLogin 
              type={'password'} 
              name={'password'} 
              placeholder={'Password'}
              onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <ButtonLogin type ={"submit"} text={'Sign In'}/>
            <div>
            Doesn't have an account? <button className='text-white hover:text-blue p-2' onClick={changeRoute}> Register </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
