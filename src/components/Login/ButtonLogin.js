import React from "react";
function ButtonLogin({onClick,text,type}){return(
    <button className= {`w-full text-center py-2.5 rounded bg-blue text-white hover:bg-blue-700 focus:outline-none my-3`}
    onClick = {onClick} type={type}>
        {text}
    </button>
)}
export default ButtonLogin