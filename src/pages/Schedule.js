import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';
import DeleteButton from '../components/Schedule/DeleteButton';
import SelectDate from '../components/Schedule/SelectDate';
import Cards from '../components/Schedule/Cards';
import Modal from '../components/Modal/Modal'


const DATE = ['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday']

function Schedule() {
  const capitalLetter = (item) =>{
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
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
    const [value,setValue] = useState('')
    const [exercises, setExercises] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState([])

    const [message,setMessage] = useState("");
    const url = "https://happy-fit-api.herokuapp.com/schedule"
        
  return (
    
    <div className='bg-gray-800'>
      {user ? (
      <div className={`items-center justify-center ${value ===''? 'h-screen': ''}`}>
        <div className='mt-24 text-white'>
          <h1 className='justify-center pt-5'>Workout Routine</h1>
        </div>
        <div className='justify-center flex mt-4'>
          <SelectDate value={value} handleChange = {(e)=> {
            setValue(e.target.value)
            switch (e.target.value){
              case 'Monday': 
                setExercises(monday)
                break;
              case 'Tuesday': 
                setExercises(tuesday)
                break;
              case 'Wednesday': 
                setExercises(wednesday)
                break;
              case 'Thursday': 
                setExercises(thursday)
                break;
              case 'Friday': 
                setExercises(friday)
                break;
              case 'Saturday': 
                setExercises(saturday)
                break;
              case 'Sunday': 
                setExercises(sunday)
                break;
              default: break;
            }
            }}/>
        </div>
        <div className={`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-10 text-white mt-8`}>
          {value !== ''?        
          <>
            {exercises.map((item,id)=>(
              <Cards 
              name={item.name} 
              description={item.description} 
              difficulty={item.difficulty} 
              key={id+item._id} 
              img = {item.imgUrl? item.imgUrl: require('../images/giphy.gif')}
              imgClass= {item.imgUrl? 'w-full': 'w-1/2'}
              onClick = {() =>{
                setShowModal(prev => !prev)
                setModalData(item)
              }}
              data = {item}
              day = {value}/>
              
            ))}
          </> : null}
          <Modal showModal={showModal} setShowModal = {setShowModal} img = {modalData.videoURL === ''? require('../images/giphy.gif'): modalData.videoURL} title = {modalData.name} tech = {modalData.tip} title1={'Exercise Techniques:'} />
        </div>
      </div>
      ) : <div className=' items-center justify-center'>
        <h1 className='justify-center pt-5'>User does not exist! Please Login to Plan Your Workout!</h1></div>}
    </div>
    
  )
}

export default Schedule
