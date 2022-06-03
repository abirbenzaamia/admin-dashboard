import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript ,Marker,InfoWindow,Polyline,StandaloneSearchBox} from '@react-google-maps/api';

import socketIOClient from "socket.io-client";
const ENDPOINT = "https://autorun-geopositioning.herokuapp.com/";



function MyComponent() {
  const depart = {
    lat: 36.7216959,
     lng: 3.1854900 
  };
   
  const [current, setCurrent] = useState(depart);
  
  
  const pathCoordinates = [
   depart,
   current
  ];  

  const [response, setResponse] = useState("");
            
  useEffect(() => {
   
    const socket = socketIOClient(ENDPOINT);
    
    socket.emit("position_update")
    socket.on("position_update", data => {
    
      setResponse(data);
      const cordination = {
         lat: parseFloat(response.latitude),
         lng: parseFloat(response.longitude)
       };
      setCurrent(cordination);
      console.log(cordination);  
    });
  }, [response.latitude, response.longitude]);
  
  
  
 
const containerStyle = {
  width: '500px',
  height: '500px' } 
  return (
    
    <LoadScript  googleMapsApiKey="AIzaSyCNdS-eHQeAsWyQ6xIEwROKmkgaA7zm6a4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={depart}
        zoom={20}
      >
         
       <Marker position= {depart}/>
       <Marker position= {current}/>
      
          <Polyline path={ pathCoordinates}
         options={{
          strokeColor: "#ff2527",
          strokeOpacity: 0.75,
          strokeWeight: 5,
      }}/>
      </GoogleMap>
    </LoadScript>
   
  );
}

export default MyComponent