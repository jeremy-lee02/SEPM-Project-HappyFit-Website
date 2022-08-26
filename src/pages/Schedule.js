import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';
import DeleteButton from '../components/Schedule/DeleteButton';

function Register() {
    const refreshPage = ()=>{
        window.location.reload();
     }
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [schedule,setSchedule]= useState(JSON.parse(localStorage.getItem('schedule')))
    const [monday,setMonday]=useState(schedule.monday)
    const [tuesday,setTuesday]=useState(schedule.tuesday)
    const [wednesday,setWednesday]=useState(schedule.wednesday)
    const [thursday,setThursday]=useState(schedule.thursday)
    const [friday,setFriday]=useState(schedule.friday)
    const [saturday,setSaturday]=useState(schedule.saturday)
    const [sunday,setSunday]=useState(schedule.sunday)
    
    const [message,setMessage] = useState("");

    const url = "https://happy-fit-api.herokuapp.com/schedule"

        
  return (
    
    <div className=' h-screen w-full  bg-gray-800'>
      {user ? (<div className=' items-center justify-center'>
      <div className='mt-24 text-white'>
        <h1 className='justify-center pt-5'>Workout routine</h1>
        </div>
        
        <div className='text-white' align="center">
        
        </div>
      </div>) : <div className=' items-center justify-center'>
        <h1 className='justify-center pt-5'>User does not exist!</h1></div>}
      
    </div>
    
  )
}

export default Register
