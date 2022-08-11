import React, { useState } from 'react'



function Result({result}) {

  const calCut = (result) => {
    return result - (result * 0.1)
  }
  const calBulk = (result) => {
    return result + (result * 0.1)
  }

  return (
    <div>
          {result == 0? null
          :<>
          <h3 className='font-bold inline-flex pt-2'> + Maintain Weight: </h3>
          <span> {result} calories</span> <br />
          <h3 className='font-bold inline-flex pt-2'> + Gain Weight: </h3>
          <span> {calBulk(parseFloat(result)).toFixed(2)} calories</span><br />
          <h3 className='font-bold inline-flex pt-2'>+ Lose Weight: </h3>
          <span> {calCut(parseFloat(result)).toFixed(2)} calories</span> <br />
          </> }
    </div>
  )
}

export default Result
