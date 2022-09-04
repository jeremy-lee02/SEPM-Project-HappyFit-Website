import React from 'react'

function SelectDate({value,handleChange}) {
  return (
    <>
        <select className='block border border-grey-light w-1/2 p-3 rounded mb-4' value={value} onChange={handleChange}>
            <option className='block border border-grey-light w-1/2 p-3 rounded mb-4' value= '' disabled={true}>--Select Your Workout Day--</option>
            <option className='block border border-grey-light w-1/2 p-3 rounded mb-4' value= 'Monday'>Monday</option>
            <option className='block border border-grey-light w-1/2 p-3 rounded mb-4' value= 'Tuesday'>Tuesday</option>
            <option className='block border border-grey-light w-1/2 p-3 rounded mb-4' value= 'Wednesday'>Wednesday</option>
            <option className='block border border-grey-light w-1/2 p-3 rounded mb-4' value= 'Thursday'>Thursday</option>
            <option className='block border border-grey-light w-1/2 p-3 rounded mb-4' value= 'Friday'>Friday</option>
            <option className='block border border-grey-light w-1/2 p-3 rounded mb-4' value= 'Saturday'>Saturday</option>
            <option className='block border border-grey-light w-1/2 p-3 rounded mb-4' value= 'Sunday'>Sunday</option>
        </select>
    </>
  )
}

export default SelectDate
