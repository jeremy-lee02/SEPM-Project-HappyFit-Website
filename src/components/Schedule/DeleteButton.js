import React, {useState} from 'react'
import useDelete from '../../Hook/useDelete'

function DeleteButton({data, day}) {
  return (
    <>
      <button className='w-full hover:bg-blue-700 cursor-pointer mt-3 bg-blue text-white rounded-lg'>Delete Exercise</button>
    </>
  )
}

export default DeleteButton