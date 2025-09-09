import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ConnectionsCard = ({ user }) => {
  const loggedUser = useSelector((store) => store.user);

  const { firstName, lastName, photoUrl, age, gender } =
    loggedUser._id === user.toUserId._id ? user.fromUserId : user.toUserId;

  const dispatch = useDispatch();

  return (
    <div className="card card-side bg-gray-200 text-gray-800 w-[300px] shadow-md items-center p-4 my-6 ">
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
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age + " " + gender}</p>
      </div>
    </div>
  );
};

export default ConnectionsCard;
