import React from 'react'
import './Skeleton.css'



function Skeleton({number}) {
  return (
    <>
        {Array(number).fill(0).map((item, index)=>(
                <div key={item+index}>
                    <div className="relative">
                        <iframe className='w-full object-cover rounded-lg gradient' />
                    </div>
                    <h2 className="text-2xl mt-3 underline gradient w-full"></h2>
                    <h3 className='font-bold inline-flex pb-1 pt-1 gradient w-full'></h3>
                    <br/>
                    <h3 className='font-bold inline-flex pt-1 pb-1 w-full gradient'></h3>
                    <br />
                    <h3 className='font-bold inline-flex pt-1 pb-1 w-full gradient'></h3>
                    <br />
                    <h3 className='font-bold inline-flex pt-1 pb-1 w-full gradient'></h3>
                </div>


        ))}
    </>
  )
}

export default Skeleton
