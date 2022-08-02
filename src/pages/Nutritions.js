import React, {useState, useEffect} from 'react'
import Modal from '../components/Modal/Modal'
import Dummy_Data from '../pages/data.json'


function Nutritions() {
  const capitalLetter = (item) =>{
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])
  const [data, setData] = useState({})

  useEffect(()=>{
    fetch('https://random-data-api.com/api/food/random_food')
      .then(res => res.json())
      .then(json => setData(json))
  },[0])

  return (
    <div className="">
    <h1 className="mt-24 justify-center pt-3">Nutritions</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-10">
      {Dummy_Data.map((item) => (
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out " key={item.id} onClick ={()=>{
        setShowModal(prev => !prev)
        setModalData(item);
      }}>
       <div className="card-top">
        <div className="relative">
         <img src={item.img} layout="fill" className='w-full' alt={data.dish}/>
         </div>
          <h2 className="text-2xl mt-3 underline">{data.dish}</h2>
          <h3 className='font-bold inline-flex pb-1 pt-1'>Description: </h3>
          <span> {data.description}</span>
          <br />
          <h3 className='font-bold inline-flex pt-1 pb-1'>Ingredient: </h3>
          <span> {data.ingredient}</span>
        </div>
      </div>
      ))}
      </div>
      <div className='flex justify-center bg-blue'>
        <Modal showModal={showModal} setShowModal = {setShowModal} img = {modalData.img} title = {data.dish} />
      </div>
      </div>
)}

export default Nutritions;