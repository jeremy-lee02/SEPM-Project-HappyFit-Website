import React from 'react'

function Result({result}) {
  return (
    <div>
          <h3 className='font-bold inline-flex pt-2'>Result: </h3>
          <span> {result}</span>
    </div>
  )
}

export default Result
