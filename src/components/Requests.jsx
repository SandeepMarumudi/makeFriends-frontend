import axios from 'axios'
import React, { useEffect } from 'react'
import BASE_URL from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'
import HorizontalCard from './HorizontalCard'

const Requests = () => {
    const dispatch=useDispatch()
    const requestsReceived=useSelector((store)=>store.requests)
  

    const fetchRequests=async()=>{
        if(requestsReceived.length>0) return
        try{
            const res=await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true})
            console.log(res.data.data)
             dispatch(addRequest(res.data.data))
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchRequests()
    },[])

  return (
    <>
 
    {
     
       requestsReceived.length>0?
        (requestsReceived.map((each)=><HorizontalCard user={each.fromUserId} id={each._id}/>)):<p>no requests found</p>
      
    }
    </>

  )
}

export default Requests