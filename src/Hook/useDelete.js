import React, { useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function useDelete(deleted, date) {
    const navigate = useNavigate();
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
            if (data === "TokenExpiredError"){
        alert("The token is expired! please relog to continue!")
        localStorage.clear();
        let path = '/Home'
        navigate(path)

            } else 
            {localStorage.removeItem('schedule')
            localStorage.setItem('schedule',JSON.stringify(data))}
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
