import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addUser} from "../utils/userSlice"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail]=useState("iyer@gmail.com")
    const [password,setPassword]=useState("Iyer2242@")
    const [error,setError]=useState("")
    const navigate=useNavigate()
   
    const dispatch=useDispatch()
    
    const handleLogin=async()=>{
        try{
            const res=await axios.post("http://localhost:7777/login",{
                email:email,
                password:password
        },{withCredentials:true})

       
        dispatch(addUser(res.data))
        setError("")
        navigate("/feed")
        }catch(err){
           setError(err?.response?.data.message)
           console.log(err)
        }
    }
  return (
    <div className="flex justify-center my-10">
      <div className="card  bg-base-300 w-96 shadow-sm ">
        <div className="card-body items-center text-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Email Id:</legend>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="input"  />
            <legend className="fieldset-legend mx-16 ">Password:</legend>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="input"  />
          </fieldset>
          <div>
            <p className="text-red-500">{error}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
