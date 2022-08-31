import React, { useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function useAdd(added, date) {
  const navigate = useNavigate();
  // const token = userId.token
  const addExercise= async() =>{
    const user = JSON.parse(localStorage.getItem('profile'))
    const schedule = JSON.parse(localStorage.getItem('schedule'))
    if(user&&schedule){
      const {data} = await axios.patch(
        `https://happy-fit-api.herokuapp.com/schedule/${user.id}/${schedule._id}`,
        {id: added._id,
        day:date},
        {headers:{
          Authorization: `Bearer ${user.token}`
        }}
      )
      if (data === "TokenExpiredError"){
        alert("The token is expired! please relog to continue!")
        localStorage.clear();
        let path = '/Home'
        navigate(path)

      } else 
      {localStorage.removeItem('schedule')
      localStorage.setItem('schedule',JSON.stringify(data))}
      
    }
  }
    useEffect(()=>{
        addExercise();
    }, [added])
  return null
}
