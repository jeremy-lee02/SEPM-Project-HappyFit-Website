import React, {useState, useRef, useCallback, useEffect} from 'react'
import Modal from '../../components/Modal/Modal'
import Skeleton from '../../components/Skeleton/Skeleton'
import '../../components/Skeleton/Skeleton.css'
import Search from '../../components/Search'
import useInfiniteScroll from '../../Hook/useInfiniteScroll'
import useAdd from '../../Hook/useAdd'
import './exercises.css'
import {AiFillPlusCircle} from 'react-icons/ai'
import SelectDay from '../../components/SelectDay'
const Error = ({title, value, error}) =>{
  return (
    <>
    <div className='h-screen'>

      <p className='justify-center text-center pt-4 text-red'>{title} {value}</p>
      <p className='justify-center text-center pt-4 text-red'>{error}</p>
    </div>
    </>

  )
}


function Exercises() {
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])
  const [addedData, setAddedData] = useState([])
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  useAdd(addedData, date)

  const {loading, error, data, hasMore} = useInfiniteScroll(value, page)
  const observer = useRef()
  const lastEle = useCallback(node =>{
    if (loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev +1 )
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasMore])

  return (
    <div className="bg-gray-800">
    <h1 className="mt-24 justify-center pt-3 text-white">Exercises</h1>
    <Search value={value} onChange= {e => {
          if (e.target.value !== '') {
            setValue(e.target.value)
          }else{
            setValue('')
            setPage(1)
          }
    }}/>
    {data.length === 0? <Error title={value ===''?'':'No Exercises with '} value={value} error={error} /> : null}
    <div className= {`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 text-white gap-10`}>
      {data.map((item, index) => {
        if (data.length === index + 1) {
          return(
            <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out text-left" ref={lastEle} key={item._id} >
             <div className="" >
              <div className="relative">
                {item.videoURL === ''? 
                <img src={require('../../images/giphy.gif')} className='w-full object-cover rounded-lg w-1/3' alt= {item.name} />
                :<img src={item.imgUrl} className='w-full object-cover rounded-lg' title= {item.name}/ >
                  }
              </div>
               <h2 className="text-2xl mt-3 underline">{item.name}</h2>
               <h3 className='font-bold inline-flex pb-1 pt-1'>Description: </h3>
                  <span> {item.description}</span>
                  <br/>
                  <h3 className='font-bold inline-flex pt-1 pb-1'>Exercise Difficulty: </h3>
                  <span> {`Level ${item.difficulty}`}</span>
              </div>
              <div className='flex gap-5 justify-between w-full'>
                {JSON.parse(localStorage.getItem('profile'))?
                <>
                <div className='mt-3'>
                  <SelectDay value={date} onChange = {(e)=> setDate(e.target.value)} />
                </div>
                <div>
                  <button className='w-fit cursor-pointer mt-3 mr-8' onClick={()=>{
                    if (date === '') {
                      alert('Please select date!')
                    }else{
                      setAddedData(item)
                      alert('Add exercise successfull!')
                    }
                  }}>
                    <AiFillPlusCircle className='icon' />
                  </button>
                </div>
                </>
              :null}
              </div>
            </div>
          )
        }else{
          return(
            <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out text-left" key={item._id} >
             <div className="">
              <div onClick ={()=>{
              setShowModal(prev => !prev)
              setModalData(item);
      
            }}>
              <div className="relative">
                {item.videoURL === ''? 
                <img src={require('../../images/giphy.gif')} className='w-full object-cover rounded-lg w-1/3' alt= {item.name} />
                :<img src= {item.imgUrl} className='w-full object-cover rounded-lg' title= {item.name}/ >
                  }
              </div>
               <h2 className="text-2xl mt-3 underline">{item.name}</h2>
               <h3 className='font-bold inline-flex pb-1 pt-1'>Description: </h3>
                  <span> {item.description}</span>
                  <br/>
                  <h3 className='font-bold inline-flex pt-1 pb-1'>Exercise Difficulty: </h3>
                  <span> {`Level ${item.difficulty}`}</span>
              </div>
              <div className='flex gap-5 justify-between w-full'>
                {JSON.parse(localStorage.getItem('profile'))?
                <>
                <div className='mt-3'>
                  <SelectDay value={date} onChange = {(e)=> setDate(e.target.value)} />
                </div>
                <div>
                  <button className='w-fit cursor-pointer mt-3 mr-8' onClick={()=>{
                    if (date === '') {
                      alert('Please select date!')
                    }else{
                      setAddedData(item)
                      alert('Add exercise successfull!')
                    }
                  }}>
                    <AiFillPlusCircle className='icon' />
                  </button>
                </div>
                </>
              :null}
              </div>
              </div>
            </div>
          )
        }
      })}
      {loading && <Skeleton number={page === 1? 8 : 2} />}
    </div>
      <div className=''>
        <Modal showModal={showModal} setShowModal = {setShowModal} img = {modalData.videoURL === ''? require('../../images/giphy.gif'): modalData.videoURL} title = {modalData.name} tech = {modalData.tip} title1={'Exercise Techniques:'} />
      </div>
      </div>
)}

export default Exercises;