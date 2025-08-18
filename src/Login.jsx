import axios from "axios";
import React, { useState } from "react";

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleLogin=async()=>{
        try{
            const login=await axios.post("http://localhost:7777/login",{
                email:email,
                password:password
        },{withCredentials:true})

        }catch(err){
           console.error(err)
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
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
