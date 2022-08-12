import React from 'react'
import {useNavigate} from 'react-router-dom'

function Register() {
  const navigate = useNavigate();
  const changeRoute = () =>{
    let path = '/Login'
    navigate(path)
  }
  return (
    <div className='mt-28 h-screen'>
      <h1>Register</h1>
      <p>Hello</p>
      <button onClick={changeRoute} >Already have an acconut?</button>
    </div>
  )
}

export default Register
