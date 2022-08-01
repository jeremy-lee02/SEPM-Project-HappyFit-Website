import React, {useState} from 'react'


function Input({type, name, placeholder, value}) {
    const [isCheck, setIsCheck] = useState(false)  
    const [inValid, setInValid] = useState('') 
    const isValid = (value) =>{
        if(name === 'height'){
            if(value < 100) {
                setIsCheck(true)
                setInValid('* Height must larger than 100')
            }else{
                setIsCheck(false)
            } 
        }
        if (name === 'age'){
            if(value.includes('.')|| value < 0){
                setIsCheck(true)
                setInValid('* Invalid age (Examples: 10, 29, 30)')
            }else{setIsCheck(false)}
        }
        if(name === 'weight'){
            if (value < 0) {
                setIsCheck(true)
                setInValid('* Weight must larger than 0')
            } else {
                setIsCheck(false)
            }
        }
    }
  return (
    <>
    <input 
    type={type} 
    className="block border border-grey-light w-full p-3 rounded mb-4" 
    name={name} 
    placeholder={placeholder}
    value ={value}
    onChange = {(e)=> {
        isValid(e.target.value)
    }}
    />
    {isCheck? <p className='text-sm text-red'>{inValid}</p> : null}
    </>
  )
}

export default Input