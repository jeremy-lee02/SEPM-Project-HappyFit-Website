import React, {useState, useEffect} from 'react'
import Modal from '../../components/Modal/Modal'
import Skeleton from '../../components/Skeleton/Skeleton'
import '../../components/Skeleton/Skeleton.css'
import Search from '../../components/Search'



function Exercises() {
  const capitalLetter = (item) =>{
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [classProps, setClassProps] = useState("")
  const [url, setUrl] = useState('https://happy-fit-api.herokuapp.com/exercises')
  const [value, setValue] = useState('')
  useEffect(()=> {
    setLoading(true)
    setClassProps("h-screen")
    fetch(`${url}`)
    .then(res => res.json())
    .then(json => {
      if (json.length === 0) {
        setClassProps('')
        setData(json)
      }else{
      setData(json)
      setLoading(false)
      setClassProps("")}
    })
  }, [value])

  return (
    <div className="bg-gray-800">
    <h1 className="mt-24 justify-center pt-3 text-white">Exercises</h1>
    <Search value={value} onChange= {e => {
          if (e.target.value !== '') {
            setValue(e.target.value)
            setUrl(`https://happy-fit-api.herokuapp.com/exercises/filterByName/${e.target.value}`)
          }else{
            setUrl('https://happy-fit-api.herokuapp.com/exercises')
            setValue('')
          }
    }}/>
    {data.length === 0? <p className='justify-center text-center pt-4 text-red'>No data with {value}</p> : null}
    <div className= {`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 text-white gap-10 ${classProps}`}>
      
      {!loading? data.map((item) => (
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out text-left" key={item._id} onClick ={()=>{
        setShowModal(prev => !prev)
        setModalData(item);

      }}>
       <div className="">
        <div className="relative">
          {item.videoURL === ''? 
          <img src={require('../../images/giphy.gif')} className='w-full h-fit object-cover rounded-lg w-1/2' alt= {item.name} />
          :<iframe src= {item.videoURL} className='w-full object-cover rounded-lg' title= {item.name}/ >
            }
        </div>
         <h2 className="text-2xl mt-3 underline">{item.name}</h2>
         <h3 className='font-bold inline-flex pb-1 pt-1'>Description: </h3>
            <span> {item.description}</span>
            <br/>
            <h3 className='font-bold inline-flex pt-1 pb-1'>Exercise Difficulty: </h3>
            <span> {`Level ${item.difficulty}`}</span>
        </div>
      </div>
      )): <Skeleton/>}
      </div>
      <div className=''>
        <Modal showModal={showModal} setShowModal = {setShowModal} img = {modalData.videoURL === ''? require('../../images/giphy.gif'): modalData.videoURL} title = {modalData.name} tech = {modalData.tip} title1={'Exercise Techniques:'} />
      </div>
      </div>
)}

export default Exercises;