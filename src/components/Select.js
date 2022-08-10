import React, {useState} from 'react'

function Select() {
    const [selected, setSelected] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const handleChange = event => {
        setSelected(event.target.value);
        sessionStorage.setItem('intensity', event.target.value)
        if(event.target.value === ''){
          sessionStorage.clear()
        }
      };
      const handleChange1 = event => {
        setSelectedGender(event.target.value);
        sessionStorage.setItem('gender', event.target.value)
        if(event.target.value === ''){
          sessionStorage.clear()
        }
      };

  return (
    <>
    <select className='block border border-grey-light w-full p-3 rounded mb-4' value={selected} onChange={handleChange}>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= '' disabled={true}>Select workout intensity</option>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= '1.2' >Sendentary</option>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= '1.375'>Light</option>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= '1.55'>Moderate</option>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= '1.725'>Active</option>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= '1.9'>Very Active</option>
    </select>
    <select className='block border border-grey-light w-full p-3 rounded mb-4' value={selectedGender} onChange={handleChange1}>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= '' disabled={true}>Select gender</option>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= 'Male'>Male</option>
        <option className='block border border-grey-light w-full p-3 rounded mb-4' value= 'Female'>Female</option>
    </select>
    </>
  )
}

export default Select