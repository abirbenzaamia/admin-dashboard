

import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript ,Marker,Polyline} from '@react-google-maps/api';
import Geocode from "react-geocode"; 
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://autorun-geopositioning.herokuapp.com/";
function MyComponent({latDep,longDep,latArv,longArv}) {
  Geocode.setApiKey("AIzaSyCNdS-eHQeAsWyQ6xIEwROKmkgaA7zm6a4");

// set response language. Defaults to english.
Geocode.setLanguage("fr");
  //getReverseGeocodingData(36.7216959, 3.1854900 ) 
  console.log(longDep);
  Geocode.fromLatLng(longDep, latDep).then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );
  Geocode.fromLatLng("36.764638", "3.236066").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );
  
  const depart = {
    lat: latDep,
     lng:  longDep
  };
  const Arrivee = {
    lat: latArv,
     lng:  longArv
  };
   
  const [current, setCurrent] = useState(Arrivee);
  const pathCoordinates = [
   depart,
   current
  ];  

  const [response, setResponse] = useState("");
            
  
  
  
  
 
const containerStyle = {
  width: '500px',
  height: '500px' } 
  return (
    
    <LoadScript  googleMapsApiKey="AIzaSyCNdS-eHQeAsWyQ6xIEwROKmkgaA7zm6a4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={depart}
        zoom={17}
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