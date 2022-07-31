import React, {useCallback,useEffect,useRef} from 'react'
import './Modal.css'

function Modal({showModal, setShowModal, img, title}) {
    const modalRef = useRef()
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
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
            <div className='overlay' ref={modalRef} onClick = {closeModal}/>
            <div className='w-max h-max text-white z-1000 inset-y-1/3 fixed justify-center'>
                <img src= {img} alt={title} />
                <h2>{title}</h2>
            </div> 
        </>
        : null}
    </>
  )
}

export default Modal