import React, {useState, useEffect} from 'react'
import Modal from '../components/Modal/Modal'
import Skeleton from '../components/Skeleton/Skeleton'
import '../components/Skeleton/Skeleton.css'
import Search from '../components/Search'

const Error = ({title, value}) =>{
  return (
    <p className='justify-center text-center pt-4 text-red'>{title} {value}</p>
  )
}

function Nutritions() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])
  const [loading, setLoading] = useState(true)
  const [classProps, setClassProps] = useState("")
  const [data, setData] = useState([])
  const [url, setUrl] = useState('https://happy-fit-api.herokuapp.com/nutrition')
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
      if (json.length <= 4) {
        setClassProps('h-screen')
        setData(json)
      }
    })
  }, [value])


  return (
    <div className="bg-gray-800">
    <h1 className="mt-24 justify-center pt-3 text-white">Nutritions</h1>
    <Search value={value} onChange= {e => {
          if (e.target.value !== '') {
            setValue(e.target.value)
            setUrl(`https://happy-fit-api.herokuapp.com/nutrition/filterByName/${e.target.value}`)
          }else{
            setUrl('https://happy-fit-api.herokuapp.com/nutrition')
            setValue('')
          }
    }}/>
    {data.length === 0? <Error title={value ===''?'':'No Nutritions with '} value={value} /> : null}
    <div className= {`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-10 text-white ${classProps}`}>
      {!loading?data.map((item) => (
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out" key={item.id} onClick ={()=>{
        setShowModal(prev => !prev)
        setModalData(item);
      }}>
       <div className="card-top">
        <div className="relative">
         <img src={require('../images/giphy.gif')} layout="fill" className='w-1/2' alt={item.name}/>
         </div>
          <h2 className="text-2xl mt-3 underline">{item.name}</h2>
          <h3 className='font-bold inline-flex pb-1 pt-1'>Description: </h3>
          <span> {item.description}</span>
          <br />
          <h3 className='font-bold inline-flex pt-1 pb-1'>Nutrition: </h3>
          <span> {item.nutrition}</span>
        </div>
      </div>
      )): <Skeleton/>}
      </div>
        <Modal 
        showModal={showModal} 
        setShowModal = {setShowModal} 
        img = {require('../images/giphy.gif')} 
        title = {modalData.name}
        title1 = {'Ingredients: '} 
        tech = {modalData.ingredient}
        title2= {'Intruction:'}
        instruct={modalData.instruction}/>
      </div>
)}

export default Nutritions;