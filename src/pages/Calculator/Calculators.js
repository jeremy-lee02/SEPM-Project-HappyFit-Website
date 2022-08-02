import React, { useState } from 'react'

import Select from '../../components/Select'


const Input = ({type, name, placeholder, onChange, value}) => {
  return (
    <>
    <input 
      type={type} 
      className="block border border-grey-light w-full p-3 rounded mb-4" 
      name={name} 
      value = {value}
      placeholder={placeholder}
      onChange = {onChange}
      />
    </>
  )
}

function Calculators() {
  const [heightValue, setHeightValue] = useState('')
  const [weightValue, setWeightValue] = useState('')
  const [ageValue, setAgeValue] = useState('')
  const [error, setError] = useState('')
  const [isError, setIsError] = useState(false)
  const isValid = (value) =>{
    if (value < 100) {
      setError('* Height must larger than 100')
      setIsError(true)
    }else{
      setIsError(false)
    }
  }

  return (
    <div className='h-screen'>
      <h1 className="mt-24 justify-center pt-3">Calculator</h1>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full mt-6">
          <Input type={'number'} name= {'height'} placeholder= {'Enter your height (cm)'} value= {heightValue} onChange = {(e) => {
            setHeightValue(e.target.value)
            isValid(e.target.value)
          }}/>
          {isError? <p className='text-sm text-red'>{error}</p> :null }

          <Input type={'number'} name= {'weight'} placeholder= {'Enter your weight (kg)'} value = {weightValue} onChange = {(e)=>{
            setWeightValue(e.target.value)
          }}/>
          <Input type={'number'} name= {'age'} placeholder= {'Enter your age'} value= {ageValue} onChange = {(e)=>{
            setAgeValue(e.target.value)
          }}/>
          <Select />
          <button className="w-full text-center py-3 rounded bg-blue text-white hover:bg-blue-700 focus:outline-none my-1">
            Calculate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculators