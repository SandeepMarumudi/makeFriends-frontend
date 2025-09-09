import axios from 'axios'

import BASE_URL from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import Card from './Card'
import { useEffect } from 'react'

const Feed = () => {
 
    const dispatch=useDispatch()
    const feed=useSelector(store=>store.feed)

    const fetchFeedData=async()=>{
        if(feed.length>0) return 
        try{
            const res=await axios.get(BASE_URL+"/feed",{withCredentials:true})
            console.log("feed")
            dispatch(addFeed(res.data))
           
        }catch(err){
            console.log(err.message)
        }
    }

   
useEffect(()=>{
  fetchFeedData()
},[])
  
  return (

  <>
    { feed.length>0 ? (
      <Card data={feed[0]} />
    ) :(
    <div className="flex flex-col items-center my-5">
      <span className="text-5xl animate-bounce">🤖</span>
      <p className="mt-2 text-pink-600 font-semibold">
        No users found
      </p>
     
    </div>
  )}

    </>
  )
}

export default Feed