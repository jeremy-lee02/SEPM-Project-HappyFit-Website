import React, { useEffect } from 'react'

export default function useAdd(added, date) {
  
    useEffect(()=>{
        console.log(added)
    }, [added])
  return null
}
