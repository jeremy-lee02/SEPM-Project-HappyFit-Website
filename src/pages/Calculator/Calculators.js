import React, { useState } from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select'

function Calculators() {
  const [heightValue, setHeightValue] = useState('')
  return (
    <div className='h-screen'>
      <h1 className="mt-24 justify-center pt-3">Calculator</h1>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full mt-6">
          <Input type={'number'} name= {'height'} placeholder= {'Enter your height (cm)'} />
          <Input type={'number'} name= {'weight'} placeholder= {'Enter your weight (kg)'}/>
          <Input type={'number'} name= {'age'} placeholder= {'Enter your age'}/>
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