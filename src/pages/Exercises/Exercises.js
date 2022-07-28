import React, {useState} from 'react'
import Modal from '../../components/Modal'
import Dummy_Data from '../data.json'


function Exercises() {
  const capitalLetter = (item) =>{
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])
  return (
    <div className="">
    <h1 className="mt-24 justify-center pt-3">Exercises</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-10">
      {Dummy_Data.map((item) => (
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out " key={item.id} onClick ={()=>{
        setShowModal(prev => !prev)
        setModalData(item);

      }}>
       <div className="card-top">
        <div className="relative">
         <img src={item.img} layout="fill" className='w-full' alt={item.title}/>
         </div>
         <h2 className="text-2xl mt-3 underline">{item.title}</h2>
        </div>
        <div className="card-bottom pt-1"> 
          <div>
            <h3 className='font-bold inline-flex'>Description: </h3>
            <span> {item.description}</span>
          </div>
          <div className='pt-1'>
            <h3 className='font-bold inline-flex'>Exercise technique: </h3>
            <span> {capitalLetter(item.tips)}</span>
          </div>
        </div>
      </div>
      ))}
      </div>
      <div className='flex justify-center bg-blue'>
        <Modal showModal={showModal} setShowModal = {setShowModal} img = {modalData.img} title = {modalData.title} />
      </div>
      </div>
)}

export default Exercises;