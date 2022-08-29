import React, { useEffect } from 'react'
import axios from 'axios';

export default function useDelete(deleted, date) {
    const deleteExercise = async() =>{
        try {
            const user = JSON.parse(localStorage.getItem('profile'))
        const schedule = JSON.parse(localStorage.getItem('schedule'))
        console.log(deleted._id,date)
        if (user&&schedule) {
            const {data} = await axios.delete(
                
                `https://happy-fit-api.herokuapp.com/schedule/${user.id}/${schedule._id}`,
                {headers:{
                    Authorization: `Bearer ${user.token}`
                  },
                data:{id:deleted._id,
                day:date}}
                 
                )
            console.log(data)
            localStorage.removeItem('schedule')
            localStorage.setItem('schedule',JSON.stringify(data))
        }
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=> {
        deleteExercise()
    }, [deleted])
  return null
}
