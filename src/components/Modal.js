import React, {useCallback,useEffect,useRef} from 'react'
import './Modal.css'
import { ReactDOM } from 'react'

function Modal({showModal, setShowModal, img, title}) {
    const modalRef = useRef()
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

  return(
    <>
        {showModal? 
        <>        
            <div className='overlay' ref={modalRef} onClick = {closeModal}/>
            <div className='w-max h-max text-white z-1000 inset-y-1/3 fixed justify-center'>
                <img src= {img} />
                <h2>{title}</h2>
            </div> 
        </>
        : null}
    </>
  )
}

export default Modal