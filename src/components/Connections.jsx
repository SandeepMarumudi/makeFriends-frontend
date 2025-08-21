import axios from "axios";
import React, { useEffect } from "react";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import HorizontalCard from "./HorizontalCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    if (connections) return;
    try {
      const res = await axios.get(BASE_URL + "/user/connections",{withCredentials:true});
      console.log(res.data.data);
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <>
      {
        connections &&connections.length>0?(connections.map((each)=><HorizontalCard user={each}/>)):<p>No connections found</p>
      }
      <h1>Connections</h1>
      
    </>
  )
};

export default Connections;
