import React from "react";
import BASE_URL from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeRequest } from "../utils/requestSlice";

const HorizontalCard = ({user,id}) => {

const {firstName, lastName, photoUrl, age, gender } = user;
  
  const dispatch=useDispatch()

  const reviewHandleRequest=async(status)=>{
    try{
      const res=await axios.post(BASE_URL+"/request/review/"+status+"/"+id,{},{withCredentials:true})
      dispatch(removeRequest(id))
    }catch(err){
     console.log(err)
    }

  }
  return (
   <div className="card card-side bg-gray-200 text-gray-800 w-[500px] shadow-md items-center p-4 my-6 ">
  {/* Left - Round Image */}
  <figure>
    <img
      src={photoUrl}
      alt="profile"
      className="w-20 h-20 rounded-full object-cover"
    />
  </figure>

  {/* Middle - Text */}
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{age+" "+gender}</p>
  </div>

  {/* Right - Buttons */}
  {
status!=="accepted"&&(
  <div className="flex flex-col gap-2 ml-auto pr-2">
    <button className="btn btn-primary btn-sm" onClick={()=>reviewHandleRequest("accepted")}>Accept</button>
    <button className="btn btn-ghost btn-sm" onClick={()=>reviewHandleRequest("rejected")}>Deny</button>
  </div>
)
  }
   

  
  
</div>

  );
};

export default HorizontalCard;
