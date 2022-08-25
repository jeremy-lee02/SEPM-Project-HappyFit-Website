import React, { useEffect } from 'react'

export default function useAdd(added, date) {
  
    useEffect(()=>{
        console.log(added)
        console.log(date)
    }, [added])
  return null
}
