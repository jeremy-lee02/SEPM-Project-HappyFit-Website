import React from 'react'

function DefaultCards({onClick,name,description,difficulty,img ,imgClass, handleClick}) {
  return (
    <>
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out" >
        <div className="card-top" onClick={onClick}>
          <div className="relative">
          <img src={img} layout="fill" className= {imgClass} alt={'item.name'}/>
          </div>
            <h2 className="text-2xl mt-3 underline">{name}</h2>
            <h3 className='font-bold inline-flex pb-1 pt-1'>Description:</h3>
            <span> {description}</span>
            <br />
            <h3 className='font-bold inline-flex pt-1 pb-1'>Exercise Difficulty: </h3>
            <span> {difficulty}</span>
        </div>
        
      </div>
    </>
  )
}

export default DefaultCards
