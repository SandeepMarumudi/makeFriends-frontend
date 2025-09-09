import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const logoutHandle=async()=>{
    try{
      const user=await axios.post(BASE_URL+"/logout",{},{withCredentials:true})
      dispatch(removeUser())
      return navigate("/login")

    }catch(err){

    }
  }
  return (
   <div className="navbar bg-base-300 shadow-sm px-4">
  <div className="flex-1 ">
    <Link to="/" className="btn btn-ghost text-xl">
      MakeFriends
    </Link>
  </div>

  <div className="flex items-center gap-4">
   

    {user && (
      <div className="dropdown dropdown-end">
        <div className="flex items-center gap-2">
          <p className="text-sm md:text-base">Welcome, {user.firstName}</p>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="photo" src={user.photoUrl} />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              
            </Link>
          </li>
          <li>
            <Link to="/user/connections">Connections</Link>
          </li>
          <li>
            <Link to="/user/requests">Requests</Link>
          </li>
          <li>
            <Link onClick={logoutHandle}>Logout</Link>
          </li>
        </ul>
      </div>
    )}
  </div>
</div>

  );
};

export default Navbar;
