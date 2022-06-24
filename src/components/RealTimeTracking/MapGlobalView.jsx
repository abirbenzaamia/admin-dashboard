import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript ,Marker,InfoWindow,Polyline,StandaloneSearchBox} from '@react-google-maps/api';
import socketIOClient from "socket.io-client";
import VehicleDetails from './VehicleDetails'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Services, APIKeys } from "../../services/webSocket.services";

export default function MapComponent({vehicules}) {
  const socket = socketIOClient(Services.WEB_SOCKET_URL);
  const center = {
    lat: 36.7216959,
     lng: 3.1254200 
  };
   
  const carsId = [];
  const [cars, setCars] = useState(new Map())

  const current = {
    lat:0,
    lng:0
  };
  //get cars ids 
  vehicules.forEach(car => {
    carsId.push(car.idVehicule)
  });

  //console.log(carsId);     
  useEffect(() => {
    //console.log(vehicules);
    socket.emit("subscribe", carsId);
    socket.on("position_update", data => {
      //console.log(data)
      setCars(cars.set(data.idVehicule,data));
      //console.log(data)
     //console.log(position);
    });
  }, [cars, carsId, socket, vehicules])
   console.log(cars);
const containerStyle = {
  width: '100%',
  height: '500px',

 } 
 var iconPin = {
  path: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z',
  fillColor: '#4361ee',
  fillOpacity: 1,
  scale: 0.03, //to reduce the size of icons
 };
 
  return (
   
    
    <LoadScript  googleMapsApiKey={APIKeys.GoogleMaps} language="french" region="Algiers">
      <GoogleMap
        mapContainerStyle={containerStyle}
       center={center}
        zoom={5}
      >
        {
          [...cars.keys()].map(k => (
            //  current.lat = cars.get(k).infoVehicule.latitude,
            //  current.lng = cars.get(k).infoVehicule.logitude,

            <Marker position={
              {
              lat : cars.get(k).infoVehicule.latitude,
              lng : cars.get(k).infoVehicule.logitude
            }
          } icon={iconPin} zIndex={10} clickable={true} />
          ))
        }
{/* <Marker position= {center} icon={iconPin} zIndex={10} clickable={true} /> */}


      </GoogleMap>
    </LoadScript>
   
  );
}
