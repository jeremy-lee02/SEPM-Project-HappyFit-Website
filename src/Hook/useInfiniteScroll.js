import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function useInfiniteScroll(value, pageNumber, url) {
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
            url: `${url}`,
            params: {page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancle = c)     
        })
        .then(res =>{
            setData([...data, ...res.data])
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancle();
    },[pageNumber])
  return {loading, error, data, hasMore}
}
