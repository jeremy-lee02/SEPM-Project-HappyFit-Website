import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';
import DeleteButton from '../components/Schedule/DeleteButton';

function Register() {
    const refreshPage = ()=>{
        window.location.reload();
     }
    const url = "https://happy-fit-api.herokuapp.com/nutrition"

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [schedule, setSchedule] = useState(await axios.get(url));
    const [email,setEmail] = useState(user.email);
    const [monday, setMonday] = useState(schedule.monday);
    const [tuesday, setTuesday] = useState(schedule.tuesday);
    const [wednesday, setWednesday] = useState(schedule.wednesday);
    const [thursday, setThursday] = useState(schedule.thursday);
    const [friday, setFriday] = useState(schedule.friday);
    const [saturday, setSaturday] = useState(schedule.saturday);
    const [sunday, setSunday] = useState(schedule.sunday);
    
    const [message,setMessage] = useState("");
    const [token,setToken] = useState(user.token)
    const [isEdit, setIsEdit] = useState(true);
    
    const handleDelete = () => {
        
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setMessage('')
        try{
          
          const updatedUser = {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            imageUrl: imageUrl
          }

          const {data} = await axios.patch(
          `${url}/${user.id}`,
          updatedUser,
          {headers:{
            Authorization: `Bearer ${user.token}`
          }})
          const newData ={
            id: id,
            token: token,
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            imageUrl: imageUrl
          }
          localStorage.setItem('profile', JSON.stringify(newData))
          console.log(JSON.parse(localStorage.getItem('profile')))
          // localStorage.clear();
          // localStorage.setItem('profile', user);
          // refreshPage();
        } catch(error){
            console.log(error)
            setMessage("Update failed. Try Again!")
        }
        }
        
  return (
    
    <div className=' w-full  bg-gray-800'>
      {user ? (<div className=' items-center justify-center'>
        
        <div className='mt-24 text-white'>
        <h1 className='justify-center pt-5'>Workout rountine</h1>
        </div>
        
        
      </div>) : <div className=' items-center justify-center'>
        <h1 className='justify-center pt-5'>User does not exist!</h1></div>}
      
    </div>
    
  )
}

export default Register
