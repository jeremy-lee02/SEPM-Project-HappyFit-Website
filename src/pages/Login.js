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
    console.log(email, password)
    const {data} = await axios.post(
      "https://happy-fit-api.herokuapp.com/auth/login",
      {email,password}
    );
    if(data) {
    
    setUser(data.currentUser)
    const displayInfo = {
      id: data.currentUser._id,
      email: data.currentUser.email,
      password: data.currentUser.password,
      token: data.accessTok,
      firstname: data.currentUser.firstname,
      lastname: data.currentUser.lastname,
      imageUrl: data.currentUser.imageUrl
    }
    console.log(displayInfo)
    localStorage.setItem('profile',JSON.stringify(displayInfo))
;}
    let path = '/Home'
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
        <form action='' className='max-w-[550px] w-full mx-auto p-20 px-8 rounded-lg  bg-gray-900 mt-10'>
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
            <ButtonLogin type ={"submit"} text={'Sign In'} onClick ={handleLogin}/>
            <div>
            <button className='text-white hover:text-blue p-2' onClick={changeRoute}> Doesn't have an account? </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
