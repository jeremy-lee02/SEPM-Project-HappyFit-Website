import React from 'react'

function SelectDay({value, onChange}) {
  return (
    <>
        <select className='block border border-grey-light rounded p-1 w-52 text-black' value={value} onChange={onChange}>
            <option className='block border border-grey-light w-full rounded' value='' disabled={true}>--Select--</option>
            <option className='block border border-grey-light w-full rounded' value='Monday'>Monday</option>
            <option className='block border border-grey-light w-full rounded' value='Tuesday'>Tuesday</option>
            <option className='block border border-grey-light w-full rounded' value='Wednesday'>Wednesday</option>
            <option className='block border border-grey-light w-full rounded' value='Thursday'>Thursday</option>
            <option className='block border border-grey-light w-full rounded' value='Friday'>Friday</option>
            <option className='block border border-grey-light w-full rounded' value='Saturday'>Saturday</option>
            <option className='block border border-grey-light w-full rounded' value='Sunday'>Sunday</option>
        </select>
    </>
  )
}

export default SelectDay
