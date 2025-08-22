import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { addUser } from "../utils/userSlice";
import Toast from "./Toast";


const Profile = () => {
  const user = useSelector((store) => store.user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user?.gender);
  const [age, setAge] = useState(user?.age);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setPhotoUrl(url);
  //   }
  // };

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          gender,
          age,
          photoUrl,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.log(err?.response?.data);
      setError(err?.response?.data);
    }
  };

  const getProfileFetch = async () => {
    if(user) return
    try {
      const user = await axios.get(BASE_URL+"/profile", {
        withCredentials: true,
      });
      dispatch(addUser(user.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfileFetch();
  }, []);


  return(
    <div>
      {showToast && <Toast />}
      <div className="flex justify-center my-10 ">
        <div className="flex justify-center mx-5 ">
          <div className="card  bg-base-300 w-96 shadow-sm ">
            <div className="card-body items-center text-center">
              <fieldset className="fieldset">
                <legend className="fieldset-legend ">Firstname:</legend>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input"
                />
                <legend className="fieldset-legend mx-16 ">Lastname:</legend>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input"
                />

                <legend className="fieldset-legend mx-16 ">Gender:</legend>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="select"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <legend className="fieldset-legend mx-16 ">Age:</legend>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="input"
                />

                <legend className="fieldset-legend mx-16 ">Photo:</legend>
                <input
                  type="text"
                  value={photoUrl}
                  onChange={(e)=>setPhotoUrl(e.target.value)}
                  className="input"
                  placeholder="only URL"
                />
                <legend className="fieldset-legend mx-16 ">About:</legend>
                <input
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="input"
                />
              </fieldset>
              <div>
                <p className="text-red-500"></p>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <Card data={{ firstName, lastName, gender, age, photoUrl, about }} />
      </div>
    </div>
  )
  
};

export default Profile;
