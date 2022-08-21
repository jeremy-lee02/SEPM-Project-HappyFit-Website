import React from "react";
function ProfileField({type, name, onChange, value, disabled}){
    return (
        <>
        <input 
          type={type} 
          className="rounded-lg mt-2 p-2" 
          name={name} 
          value = {value}
          onChange = {onChange}
          disabled = {disabled}
          />
        </>
      )
}
export default ProfileField;