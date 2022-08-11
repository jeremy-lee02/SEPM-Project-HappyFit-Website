import React from 'react'

function Button({onClick}) {
    return(
        <button className= {`w-full text-center py-3 rounded bg-blue text-white hover:bg-blue-700 focus:outline-none my-1`}
        onClick = {onClick}>
          Calculate
        </button>
    )
}

export default Button
