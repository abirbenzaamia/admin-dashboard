import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript ,Marker,InfoWindow,Polyline,StandaloneSearchBox} from '@react-google-maps/api';

import socketIOClient from "socket.io-client";
const ENDPOINT = "https://autorun-websocket.herokuapp.com";



function MyComponent() {
  const depart = {
    lat: 36.7216959,
     lng: 3.1854900 
  };
   
  const [current, setCurrent] = useState(depart);
  

  const [response, setResponse] = useState("");
  const [vehicules, setVehicules] = useState();         
  useEffect(() => {
   
    const socket = socketIOClient(ENDPOINT);
    
    socket.emit("subscribe", []);
    socket.on("position_update", data => {
      console.log(data.idVehicule)
      const cordination = {
         lat: parseFloat(data.infoVehicule.latitude),
         lng: parseFloat(data.infoVehicule.logitude)
       };
      setCurrent(cordination);
      //console.log(cordination);  
    });
  }, []);
  
  
  
 
const containerStyle = {
  width: '100%',
  height: '300px'
 } 
  return (
    
    <LoadScript  googleMapsApiKey="AIzaSyCNdS-eHQeAsWyQ6xIEwROKmkgaA7zm6a4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={current}
        zoom={20}
      >
         
       <Marker position= {current}/>
      
      </GoogleMap>
    </LoadScript>
   
  );
}

export default MyComponent