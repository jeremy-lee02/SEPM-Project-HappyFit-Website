import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';
import ProfileField from '../components/Profile/ProfileField';
import UpdateButton from '../components/Profile/UpdateButton';

function Register() {
    const refreshPage = ()=>{
        window.location.reload();
     }
     
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [id,setId] = useState(user.id)
    const [imageUrl,setImageUrl] = useState(user.imageUrl);
    const [password,setPassword] = useState(user.password);
    const [email,setEmail] = useState(user.email);
    const [firstname,setFirstname] = useState(user.firstname);
    const [lastname,setLastname] = useState(user.lastname);
    const [message,setMessage] = useState("");
    const [token,setToken] = useState(user.token)
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
        <h1 className='justify-center pt-5'>Profile</h1>
        </div>
        <UpdateButton text={isEdit ? ("Edit profile") : "Cancel"} onClick={handleEdit}/>
        <form action='' className='max-w-[550px] w-full mx-auto p-20 px-8 rounded-lg  bg-gray-900 mt-10' onSubmit={handleSubmit}>
        <div className='text-white flex justify-center'>
        
        <img className=" rounded-full" width={300}
        src={`${imageUrl}`}
        alt="Profile picture"
        /></div>
        
        <div className='text-red'>{message && <h3>{message}</h3>}</div>
        <div className='flex flex-col py-2'>
        <div className='text-white'>Email:</div>
          <ProfileField
          name={email}
          type = "email"
          value={email}
          disabled = {true}
          />
        </div>
        <div className='flex flex-col py-2'>
        <div className='text-white'>Firstname:</div>
          <ProfileField
          name={firstname}
          type = "text"
          value={firstname}
          disabled = {isEdit}
          onChange={(e)=>setFirstname(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
        <div className='text-white'>Lastname:</div>
          <ProfileField
          name={lastname}
          type = "text"
          value={lastname}
          disabled = {isEdit}
          onChange={(e)=>setLastname(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
          <div className='text-white'>Profile picture link:</div>
          <ProfileField
          name={imageUrl}
          type = "text"
          value={imageUrl}
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
