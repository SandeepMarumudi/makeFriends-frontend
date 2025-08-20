import axios from 'axios'
import React, { useEffect } from 'react'
import BASE_URL from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import Card from './Card'

const Feed = () => {
    const dispatch=useDispatch()
    const feed=useSelector(store=>store.feed)

    const fetchFeedData=async()=>{
        if(feed) return 
        try{
            const res=await axios.get(BASE_URL+"/feed",{withCredentials:true})
         
            dispatch(addFeed(res.data))
           
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchFeedData()
    },[])

  return (
    <>
   {
   feed&&(
        feed.map((each,index)=><Card data={each} />)
    )
   }
    </>
  )
}

export default Feed