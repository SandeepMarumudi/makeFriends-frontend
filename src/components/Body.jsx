import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import BASE_URL from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
import Feed from './Feed'


const Body = () => {
const dispatch=useDispatch()
const navigate=useNavigate()
const userData=useSelector(store=>store.user)
//  this fetchLoggedUser is for whenever refresh it automatically logged out
//  but the token in the browser is present, due to this we useEffect and get the profile info
//  from get profile api in the backend due to token present in the browser it will get the user and 
//  store the user in the redux store and now the issue is resolved

  const fetchLoggedUser=async()=>{
      if(userData){
        return    //why to call api always we already storing user in the store check store first after call
      }
    try{
      const user=await axios.get(BASE_URL+"/profile",{withCredentials:true})
      dispatch(addUser(user.data))
    }catch(err){
      if(err.status===401){
        navigate("/login")
      }
      console.error(err)
    }
  }
  useEffect(()=>{
    fetchLoggedUser()
  },[])


  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
 
   </>
  )
}

export default Body