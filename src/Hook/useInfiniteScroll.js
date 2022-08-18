import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function useInfiniteScroll(value, pageNumber) {

    useEffect(()=>{
        axios({
            method:'GET',
            url: `https://happy-fit-api.herokuapp.com/exercises/filterByName/${value}`,
            params: {page: pageNumber}
        })
        .then(res =>{
            console.log(res.data)
        })
    },[value, pageNumber])

  return null
}
