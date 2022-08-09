import React, {useState, useEffect} from 'react'
import Modal from '../../components/Modal/Modal'
import Dummy_Data from '../data.json'



function Exercises() {
  const capitalLetter = (item) =>{
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])

  const [data, setData] = useState([])
  useEffect(()=> {
    fetch(`http://localhost:4000/exercises`)
    .then(res => res.json())
    .then(json => {
      setData(json)
    })
  }, [])



  return (
    <div className="">
    <h1 className="mt-24 justify-center pt-3">Exercises</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-10">
      {data.map((item) => (
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out text-left" key={item._id} onClick ={()=>{
        setShowModal(prev => !prev)
        setModalData(item);

      }}>
       <div className="">
        <div className="relative">
         <iframe src='https://www.youtube.com/embed/DBSWbOkfknE' className='w-full object-cover rounded-lg' ></iframe>
         </div>
         <h2 className="text-2xl mt-3 underline">{item.name}</h2>
         <h3 className='font-bold inline-flex pb-1 pt-1'>Description: </h3>
            <span> {item.description}</span>
            <br/>
            <h3 className='font-bold inline-flex pt-1 pb-1'>Exercise Difficulty: </h3>
            <span> {`Level ${item.difficulty}`}</span>
        </div>
      </div>
      ))}
      </div>
      <div className=''>
        <Modal showModal={showModal} setShowModal = {setShowModal} img = {'https://www.youtube.com/embed/IjPLwbryGI4'} title = {modalData.name} tech = {modalData.tip} />
      </div>
      </div>
)}

export default Exercises;