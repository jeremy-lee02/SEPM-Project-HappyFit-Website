import React, {useState} from 'react'
import Modal from '../components/Modal/Modal'
import Skeleton from '../components/Skeleton/Skeleton'
import Dummy_Data from '../pages/data.json'
import '../components/Skeleton/Skeleton.css'
import Search from '../components/Search'


function Nutritions() {
  // const capitalLetter = (item) =>{
  //   return item.charAt(0).toUpperCase() + item.slice(1)
  // }
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])
  const [loading, setLoading] = useState(true)
  const [classProps, setClassProps] = useState("")

  

  return (
    <div className="">
    <h1 className="mt-24 justify-center pt-3">Nutritions</h1>
    <Search/>
    <div className= {`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-10 ${classProps}`}>
      {!loading?Dummy_Data.map((item) => (
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out" key={item.id} onClick ={()=>{
        setShowModal(prev => !prev)
        setModalData(item);
      }}>
       <div className="card-top">
        <div className="relative">
         <img src={item.img} layout="fill" className='w-full' alt={item.title}/>
         </div>
          <h2 className="text-2xl mt-3 underline">{item.title}</h2>
          <h3 className='font-bold inline-flex pb-1 pt-1'>Description: </h3>
          <span> {item.description}</span>
          <br />
          <h3 className='font-bold inline-flex pt-1 pb-1'>Ingredient: </h3>
          <span> {item.tips}</span>
        </div>
      </div>
      )): <Skeleton/>}
      <Skeleton />
      </div>
        <Modal showModal={showModal} setShowModal = {setShowModal} img = {modalData.img} title = {modalData.title} />
      </div>
)}

export default Nutritions;