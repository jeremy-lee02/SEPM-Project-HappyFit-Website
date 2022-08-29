import React, { useEffect } from 'react'
import axios from 'axios';

export default function useDelete(deleted, date) {
    const deleteExercise = async() =>{
        const user = JSON.parse(localStorage.getItem('profile'))
        const schedule = JSON.parse(localStorage.getItem('schedule'))
        if (user&&schedule) {
            const {data} = await axios.delete(
                `https://happy-fit-api.herokuapp.com/schedule/${user.id}/${schedule._id}`,
                {
                    id: deleted._id,
                    day: date
                },
                {headers:{
                    Authorization: `Bearer ${user.token}`
                }}
            )
            localStorage.removeItem('schedule')
            localStorage.setItem('schedule',JSON.stringify(data))
        }
    }
    useEffect(()=> {
        deleteExercise()
    }, [deleted])
  return null
}
