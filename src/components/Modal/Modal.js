import React, {useCallback,useEffect,useRef} from 'react'
import './Modal.css'
import { AiOutlineClose } from 'react-icons/ai';

function Modal({showModal, setShowModal, img, title,tech, title1, title2, instruct, img1}) {
    const modalRef = useRef()
    const closeModal = () => {
            setShowModal(false)
    }
    const keyPress = useCallback(e =>{
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    },[setShowModal,showModal])
    useEffect(()=>{
        document.addEventListener('keydown',keyPress)
        return () => document.removeEventListener('keydown',keyPress)
    },[keyPress])
  return(
    <>
        {showModal? 
        <>        
            <div className='overlay h-full' ref={modalRef} />
            <div className='w-full text-white z-1000 fixed modal md:flex'>
                <div className='close pl-10 pt-6' onClick={closeModal}>&times;</div>
                <div className='w-full pl-10 pt-10'>
                    {img?<iframe src= {img} alt={title} className = 'flex justify-between pb-2 rounded-lg lg:h-80' width="90%" height="350"/>:
                    <img src = {img1} alt = {title} className= "w-1/2 h-3/4" layout="fill"></img>
                    }
                </div>
                <div className='w-full text-blue pt-8'>
                    <h2>{title}</h2>
                    <h3 className='font-bold inline-flex pt-5'>{title1} </h3>
                    <span> {tech}</span><br/>
                    <h3 className='font-bold inline-flex pt-5'>{title2} </h3>
                    <span> {instruct}</span>
                </div>
            </div> 
        </>
        : null}
    </>
  )
}

export default Modal