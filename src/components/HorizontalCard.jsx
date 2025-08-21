import React from "react";

const HorizontalCard = ({user}) => {
  const {firstName,lastName,photoUrl,age,gender,accepted}=user.fromUserId
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
    !accepted&&<div className="flex flex-col gap-2 ml-auto pr-2">
    <button className="btn btn-primary btn-sm">Accept</button>
    <button className="btn btn-ghost btn-sm">Deny</button>
  </div>

  }
  
</div>

  );
};

export default HorizontalCard;
