import axios from "axios";
import React from "react";
import BASE_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const Card = ({data}) => {
 
   const {_id,firstName,lastName,gender,age,photoUrl,about}=data
   const dispatch=useDispatch()
   
   const handleRequest=async(status)=>{
    try{
      const res= await axios.post(BASE_URL+"/request/send/"+status+"/"+_id,{},{withCredentials:true})
      dispatch(removeFeed(_id))
    }catch(err){

    }

   }
   
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 my-5">

    <div className="card bg-base-100 w-64  shadow-md">
      <figure>
        <img
          src={photoUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions">
        <h2 className="card-title">{firstName}</h2>
        <h2 className="card-title">{age}</h2>
        </div>
        <h2>{gender}</h2>
        <p>
          {about}
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary" onClick={()=>handleRequest("ignored",_id)}>Ignore</button>
          <button className="btn btn-primary" onClick={()=>handleRequest("interested",_id)}>Interested</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
