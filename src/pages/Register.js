import React from 'react'
import {useNavigate} from 'react-router-dom'
import ButtonLogin from '../components/Login/ButtonLogin';
import InputLogin from '../components/Login/InputLogin';
import {useState} from 'react';
import axios from 'axios';
function Register() {

  const [imageUrl,setImageUrl] = useState("");
  const [password,setPassword] = useState("");
  const [confirmedpassword,setConfirmedPassword] = useState("");
  const [email,setEmail] = useState("");
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [message,setMessage] = useState("");
  const [loading,setLoading] = useState("")
  const navigate = useNavigate();

  const changeRoute = () =>{
    let path = '/Login'
    navigate(path)
  }
  const handleRegister = async (e)=>{
    e.preventDefault();
    if (password!==confirmedpassword){
      setMessage("Password and confirmed password do not match!")
    } else {
      setMessage('')
      try{
        const {data}= await axios.post(
          "http://localhost:4000/auth/signup",
          {email,password,firstname,lastname,imageUrl}
        )

        if (data) {
        console.log(data)
        setMessage("Registered successfully!")
        let path = '/Login'
        navigate(path)
      }
      } catch(error){
        console.log(error)
        setMessage("Register unsuccessfully! Try again.")
      }
    }
  }

  return (
    <div className=' w-full h-screen bg-gray-800'>
      <div className=' items-center justify-center'>
        
        <div className='mt-24 text-white'>
        <h1 className='justify-center pt-5'>Register</h1>
        </div>
        <form action='' className='max-w-[550px] w-full mx-auto p-20 px-8 rounded-lg  bg-gray-900 mt-10' onSubmit={handleRegister}>
        <div className='text-red'>{message && <h3>{message}</h3>}</div>

        <div className='flex flex-col py-2'>
          <InputLogin 
          type={'email'} 
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

        <div className='flex flex-col py-2'>
          <InputLogin 
          type={'password'} 
          name={'confirmedPassword'} 
          placeholder={'Retype Password'}
          onChange={(e)=> setConfirmedPassword(e.target.value)}/>
        </div>

        <div className=' py-2'>
          <InputLogin 
          type={'text'} 
          name={'firstName'} 
          placeholder={'First name'} 
          onChange={(e)=> setFirstname(e.target.value)}/>
          
          <InputLogin 
          type={'text'} 
          name={'lastName'} 
          placeholder={'Last name'}
          onChange={(e)=> setLastname(e.target.value)}/>
        </div>

        <div className='flex flex-col py-2'>
          <InputLogin 
          type={'text'} 
          name={'imageUrl'} 
          placeholder={'Proifile picture URL'}
          onChange={(e)=> setImageUrl(e.target.value)}/>
        </div>
        
        <div>
          <ButtonLogin text={"Register"} type={"submit"}/>
        </div>

        <div>
        Already have an account?<button className='text-white hover:text-blue p-2' onClick={changeRoute} > Login</button>
        </div>
            
        </form>
      </div>
    </div>
    
  )
}

export default Register
