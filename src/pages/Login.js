import React from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const changeRoute = () =>{
      let path = '/Register'
      navigate(path)
    }
  return (
    <div className='mt-28 h-screen'>
      <h1>Login</h1>
    <button onClick={changeRoute}>Does not have an acoount?</button>
    </div>
  )
}

export default Login
