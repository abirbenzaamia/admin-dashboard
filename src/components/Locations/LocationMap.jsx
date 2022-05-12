import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript ,Marker,InfoWindow,Polyline,StandaloneSearchBox} from '@react-google-maps/api';
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://autorun-geopositioning.herokuapp.com/";







function LocationMap({latDep,longDep,latArv,longArv}) {
    const dep = {
        lat:latDep ,
         lng: longDep 
      };
      const arv = {
        lat: latArv,
         lng: longArv 
      };
  const [response, setResponse] = useState("");
              //   latitude: "36.7159"
              //  ,longitude: "3.1536"
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("position_update")
    socket.on("position_update", data => {
      setResponse(data);
    });
  }, []);
  

  
  const center = {
    lat: parseFloat(response.latitude),
    lng: parseFloat(response.longitude)
  };

const containerStyle = {
  width: '500px',
  height: '500px' } 
  return (
    
    <LoadScript  googleMapsApiKey="AIzaSyCNdS-eHQeAsWyQ6xIEwROKmkgaA7zm6a4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
       
       <Marker position= {dep}/>
       <Marker position= {arv}/>
    
                         
          <Polyline path={[{ lat: 36.7206251, lng: 4.1854975  }, { lat: 36.7216959, lng: 4.1854900  }]}
         options={{
          strokeColor: "#ff2527",
          strokeOpacity: 0.75,
          strokeWeight: 5,
      }}/>
      </GoogleMap>
    </LoadScript>
   
  );
}

export default LocationMap;