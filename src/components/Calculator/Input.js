import React from 'react'

function Input({type, name, placeholder, onChange, value}) {
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

export default Input
