import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function useInfiniteScroll(value, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(()=>{
        setData([])
    }, [value])
    useEffect(()=>{
        setLoading(true)
        setError(false)
        let cancle
        axios({
            method:'GET',
            url: `https://happy-fit-api.herokuapp.com/exercises`,
            params: {page: pageNumber, value:value},
            cancelToken: new axios.CancelToken(c => cancle = c)     
        })
        .then(res =>{
            const noDuplicate = []
            if (data == null) {
                setData(res.data)
            }else{
                res.data.forEach(element => {
                    if (!data.some(ele => ele._id === element._id)) {
                        noDuplicate.push(element)
                    }
                });
                setData([...data, ...noDuplicate])
            }
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancle();
    },[pageNumber,value])
  return {loading, error, data, hasMore}
}
