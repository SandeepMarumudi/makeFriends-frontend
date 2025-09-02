import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";

const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      setError("");
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data.message);
      console.log(err);
    }
  };

  const handleSignup=async()=>{
    try{
      const res=await axios.post(BASE_URL+"/signup",{firstName,lastName,email,password},{withCredentials:true})
      dispatch(addUser(res.data.data))
      return navigate("/profile")
 
    }catch(err){
      console.log(err)
    }

  }
  return (
    <div className="flex justify-center my-10">
      <div className="card  bg-base-300 w-96 shadow-sm ">
        <div className="card-body items-center text-center">
          <fieldset className="fieldset">
            {loginForm && (
              <div>
                <legend className="fieldset-legend ">Firstname:</legend>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input"
                />
                <legend className="fieldset-legend ">Lastname:</legend>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input"
                />
              </div>
            )}
            {/* <legend >Email Id:</legend> */}
            <lable className="fieldset-legend " for="email"> Email Id:</lable>
            <input
              to="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            {/* <legend className="fieldset-legend mx-16 ">Password:</legend> */}
            <lable className="fieldset-legend " for="password"> password:</lable>

            <input
              to="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </fieldset>
          <div>
            <p className="text-red-500">{error}</p>
            <p onClick={()=>setLoginForm(value=>!value)}>{loginForm?"Existing user?Login here":"New user?signup here"}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={loginForm?handleSignup:handleLogin}>
              {loginForm?"Sign up":"Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
