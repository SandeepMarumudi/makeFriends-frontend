import axios from "axios";
import React, { useEffect } from "react";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import HorizontalCard from "./HorizontalCard";
import ConnectionsCard from "./ConnectionsCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  
  
 

  const fetchConnections = async () => {
    
    if (connections.length>0) return;
    try {
      const res = await axios.get(BASE_URL +"/user/connections",{withCredentials:true});
    
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className=" flex flex-wrap justify-center  mx-2">
      {
        connections.length>0?(connections.map((each)=><ConnectionsCard user={each}/>)):<p>No connections found</p>
      }
      
    </div>
  )
};

export default Connections;
