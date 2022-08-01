import React, {useState} from 'react'
import Modal from '../../components/Modal/Modal'
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
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out text-left" key={item.id} onClick ={()=>{
        setShowModal(prev => !prev)
        setModalData(item);

      }}>
       <div className="">
        <div className="relative">
         <img src={item.img} className='w-full object-cover' alt={item.title}/>
         </div>
         <h2 className="text-2xl mt-3 underline">{item.title}</h2>
         <h3 className='font-bold inline-flex pb-1 pt-1'>Description: </h3>
            <span> {item.description}</span>
            <br/>
            <h3 className='font-bold inline-flex pt-1 pb-1'>Exercise technique: </h3>
            <span> {capitalLetter(item.tips)}</span>
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