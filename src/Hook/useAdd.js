import React, { useEffect } from 'react'
import axios from 'axios';


export default function useAdd(added, date) {
  // const token = userId.token
  const addExercise= async() =>{
    const user = JSON.parse(localStorage.getItem('profile'))
    const schedule = JSON.parse(localStorage.getItem('schedule'))
    
    const {data} = await axios.patch(
      `https://happy-fit-api.herokuapp.com/schedule/${user.id}/${schedule._id}`,
      {id: added._id,
      day:date},
      {headers:{
        Authorization: `Bearer ${user.token}`
      }}
    )
    console.log(data)
    console.log(user)
    console.log(schedule)
    localStorage.removeItem('schedule')
    localStorage.setItem('schedule',JSON.stringify(data))
  }
    useEffect(()=>{
        addExercise();
    }, [added])
  return null
}
