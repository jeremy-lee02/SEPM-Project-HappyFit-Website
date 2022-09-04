import React, {useState, useEffect} from 'react'
import useDelete from '../../Hook/useDelete'

function DeleteButton({handleClick}) {
  return (
    <>
      <button className='w-full hover:bg-blue-700 cursor-pointer mt-3 bg-blue text-white rounded-lg' onClick={handleClick}>Delete Exercise</button>
    </>
  )
}

export default DeleteButton