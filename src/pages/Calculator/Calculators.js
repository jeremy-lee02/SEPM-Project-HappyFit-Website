import React, { useState } from 'react'
import Result from '../../components/Result'

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

const Button = ({onClick}) =>{
  return(
  <button className= {`w-full text-center py-3 rounded bg-blue text-white hover:bg-blue-700 focus:outline-none my-1`}
  onClick = {onClick}>
    Calculate
  </button>
  )
}

const MALE_CONSTANT = [13.397,4.799,5.677,88.362]
const FEMALE_CONSTANT = [9.247,3.098 ,4.330,447.593]

function Calculators() {
  const [result, setResult] = useState ()
  const [heightValue, setHeightValue] = useState('')
  const [weightValue, setWeightValue] = useState('')
  const [ageValue, setAgeValue] = useState('')
  const [errorHeight, setErrorHeight] = useState('')
  const [errorWeight, setErrorWeight] = useState('')
  const [errorAge, setErrorAge] = useState('')
  const [error, setError] = useState('')
  const [isErrorHeight, setIsErrorHeight] = useState(true)
  const [isErrorWeight, setIsErrorWeight] = useState(true)
  const [isErrorAge, setIsErrorAge] =useState(true)
  const isValidHeight = (value) =>{
    if (value < 100) {
      setErrorHeight('* Height must larger than 100')
      setIsErrorHeight(true)
    }else{
      setIsErrorHeight(false)
    }
  }

  const isValidWeight = (value) =>{
    if (value < 0){
      setErrorWeight('* Weight must larger than 0')
      setIsErrorWeight(true)
    }else{
      setIsErrorWeight(false)
    }
  }
  const isValidAge = (value) =>{
    if (value <0 || value.includes('.')) {
      setErrorAge('* Age must larger than zero & deciamal is invalid')
      setIsErrorAge(true)
    }else{
      setIsErrorAge(false)
    }
  }
  const isValid = () => {
    if (!isErrorHeight&&!isErrorWeight&!isErrorAge && sessionStorage.length === 2) {
      setHeightValue('')
      setAgeValue('')
      setWeightValue('')

    }else{
      setError('Invalid')
    }
  }


  return (
    <div className='h-screen'>
      <h1 className="mt-24 justify-center pt-3">Calculator</h1>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full mt-6">
          <p className='text-sm text-red'>{error}</p>
          <Input type={'number'} name= {'height'} placeholder= {'Enter your height (cm)'} value= {heightValue} onChange = {(e) => {
            setHeightValue(e.target.value)
            isValidHeight(e.target.value)
          }}/>
          {isErrorHeight? <p className='text-sm text-red'>{errorHeight}</p> :null }

          <Input type={'number'} name= {'weight'} placeholder= {'Enter your weight (kg)'} value = {weightValue} onChange = {(e)=>{
            setWeightValue(e.target.value)
            isValidWeight(e.target.value)
          }}/>
          {isErrorWeight? <p className='text-sm text-red'>{errorWeight}</p> :null }
          <Input type={'number'} name= {'age'} placeholder= {'Enter your age'} value= {ageValue} onChange = {(e)=>{
            setAgeValue(e.target.value)
            isValidAge(e.target.value)
          }}/>
          {isErrorAge? <p className='text-sm text-red'>{errorAge}</p> :null }
          <Select />
          <Button onClick= {isValid}/>
          <Result result={'123'} />
        </div>
      </div>
    </div>
  )
}

export default Calculators