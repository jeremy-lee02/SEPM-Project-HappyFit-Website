import React, { useEffect } from 'react'

export default function useAdd(added) {
    useEffect(()=>{
        console.log(added)
    }, [added])
  return null
}
