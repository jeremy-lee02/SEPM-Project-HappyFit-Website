import React from "react";
function InputLogin({type, name, placeholder, onChange, value}){
    return (
        <>
        <input 
          type={type} 
          className= {`rounded-lg mt-2 p-2 w-full`}
          name={name} 
          value = {value}
          placeholder={placeholder}
          onChange = {onChange}
          />
        </>
      )
}
export default InputLogin