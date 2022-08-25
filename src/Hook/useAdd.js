import React, { useEffect } from 'react'
import axios from 'axios';

export default function useAdd(userId, scheduleId, added, date, token) {
  const addExercise= async() =>{
    const {data} = await axios.patch(
      `https://happy-fit-api.herokuapp.com/schedule/${userId}/${scheduleId}`,
      {id: added._id,
      day:date},
      {headers:{
        Authorization: `Bearer ${token}`
      }}
    )
    console.log(data)
    localStorage.removeItem('schedule')
    localStorage.setItem('schedule',JSON.stringify(data))
  }
    useEffect(()=>{
        addExercise();
    }, [added])
  return null
}
