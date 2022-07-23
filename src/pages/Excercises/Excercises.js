import React from 'react'
import Dummy_Data from './data.json'


function Excercises() {
  return (
    <div>
    <h1 className="mt-24">Exercises</h1>
      {Dummy_Data.map((item) => (
      <div className="cursor-pointer hover:scale-105 tranform transition duration-300 ease-out">
       <div className="card-top">
        <div className="relative">
         <img src={item.img} layout="fill"/>
         </div>
         <h2 className="text-2xl mt-3">{item.title}</h2>
        </div>
        <div className="card-bottom"> 
          <h3>Description: {item.description}</h3>
          <h3>Exercise technique: {item.tips}</h3>
        </div>
      </div>
      ))}
      </div>
)}

export default Excercises;