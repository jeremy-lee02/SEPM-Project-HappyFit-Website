import React, { useEffect } from 'react'
import axios from 'axios';

export default function useAdd(userId, added, date, token) {
  
    useEffect(()=>{
        const newExercise = {}

        console.log(added)
        console.log(date)
        console.log(token)
    }, [added])
  return null
}
