import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';
import ProfileField from './ProfileField';
import UpdateButton from './UpdateButton';

function Register() {
    const refreshPage = ()=>{
        window.location.reload();
     }
     const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [imageUrl,setImageUrl] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [message,setMessage] = useState("");
    const [isEdit, setIsEdit] = useState(true);
    const url = "https://happy-fit-api.herokuapp.com/auth/user"

    const handleEdit =()=>{
        console.log(user)
        setIsEdit((prevIsEdit)=> !prevIsEdit);
        if (isEdit){
            setMessage('Change your personal details.')
        } else {
            setMessage('')
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setMessage('')
        try{
            const {data}= await axios.patch(
            `${url}/${user.id}`,
            {email,password,firstname,lastname,imageUrl},
            {headers:{
                Authorization: 'Bearer ' + user.token
            }
            })
            refreshPage();
        } catch(error){
            console.log(error)
            setMessage("Update failed. Try Again!")
        }
        }

  return (
    
    <div className=' w-full h-screen bg-gray-800'>
      {user ? (<div className=' items-center justify-center'>
        
        <div className='mt-24 text-white'>
        <h1 className='justify-center pt-5'>Profile</h1>
        </div>
        <UpdateButton text={isEdit ? ("Edit profile") : "Cancel"} onClick={handleEdit}/>
        <form action='' className='max-w-[550px] w-full mx-auto p-20 px-8 rounded-lg  bg-gray-900 mt-10' onSubmit={handleSubmit}>
        <div className='text-white justify-center'>Profile Picture:</div>
        <img width={200}
        src={`${user.imageUrl}`}
        alt="Profile picture"
        />
        <div className='text-white'>{message && <h3>{message}</h3>}</div>
        <div className='flex flex-col py-2'>
        <div className='text-white'>Email:</div>
          <ProfileField
          name={email}
          type = "email"
          value={user.email}
          disabled = {isEdit}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
        <div className='text-white'>Password:</div>
          <ProfileField
          name={password}
          type = "password"
          disabled = {isEdit}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
        <div className='text-white'>Firstname:</div>
          <ProfileField
          name={firstname}
          type = "text"
          value={user.firstname}
          disabled = {isEdit}
          onChange={(e)=>setFirstname(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
        <div className='text-white'>Lastname:</div>
          <ProfileField
          name={lastname}
          type = "text"
          value={user.lastname}
          disabled = {isEdit}
          onChange={(e)=>setLastname(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
          <div className='text-white'>Profile picture link:</div>
          <ProfileField
          name={imageUrl}
          type = "text"
          value={user.imageUrl}
          disabled = {isEdit}
          onChange={(e)=>setImageUrl(e.target.value)}
          />
        </div>
        <div>
            <UpdateButton text={"Save changes"} type={"submit"}/>
        </div>

            
        </form>
        
      </div>) : <div className=' items-center justify-center'>
        <h1 className='justify-center pt-5'>User does not exist!</h1></div>}
      
    </div>
    
  )
}

export default Register
