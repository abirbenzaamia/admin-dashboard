/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript ,Marker,DirectionsRenderer} from '@react-google-maps/api';

import socketIOClient from "socket.io-client";
import {getLocationInfo} from '../../modules/Vehicles/locations.crud'
import { APIKeys } from '../../services/webSocket.services'
import { Button } from "@mui/material";
const ENDPOINT = "https://autorun-geopositioning.herokuapp.com/";

function MapDetails({id}) {
  const [reservation,setReservation] = useState();
  const [depart,setDepart] = useState('');
  const [arrivee , setArrivee] = useState('');
  // const depart = {
  //   lng:reservation.longitudeDepart,
  //   lat:reservation.latitudeDepart
  // };
  // const Arrivee = {
  //   lng:reservation.longitudeArrivee,
  //   lat:reservation.latitudeArrivee
  // };
  useEffect(()=>{
    const getReservationDetails = async ()=>{
      const response = await getLocationInfo(id);
      console.log(response.data);
    setDepart({
      lng:response.data.longitudeDepart,
      lat:response.data.latitudeDepart
    });
    setArrivee({
      lng:response.data.longitudeArrivee,
      lat:response.data.latitudeArrivee
    })
    console.log(arrivee)
      setReservation(response.data);
    }
  //   const getLocataireInfo = async ()=>{
  //     const response = await getLocataireInfo(99);
  //     console.log(response.data);
  //     setLocataires(response.data);
  //  }
   getReservationDetails()
   .catch(console.error);
}, [id])

const [directionResponse, setDirectionResponse] = useState(null);
const [distance, setDistance] = useState('');
const [duration, setDuration] = useState('');

async function calculateRoute (){
if (depart ==='' || arrivee === '') return;
const directionService = new google.maps.DirectionsService();
const result = await directionService.route({
  origin : depart,
  destination : arrivee,
  travelMode : google.maps.TravelMode.DRIVING
})
setDirectionResponse(result)
setDistance(result.routes[0].legs[0].distance.text)
setDuration(result.routes[0].legs[0].duration.text)
}
  const [current, setCurrent] = useState(depart);
  
  
  // const pathCoordinates = [
  //  depart,
  //  current
  // ];  

 // const [response, setResponse] = useState("");
            
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.emit("position_update")
  //   socket.on("position_update", data => {
  //     setResponse(data);
  //     const cordination = {
  //        lat: parseFloat(response.latitude),
  //        lng: parseFloat(response.longitude)
  //      };
  //     setCurrent(cordination);
  //     console.log(cordination);  
  //   });
  // }, [response.latitude, response.longitude]);
  
  
  
 
const containerStyle = {
  width: '100%',
  height: '300px',
} 
  return !reservation ? null :(
    
    <LoadScript  googleMapsApiKey={APIKeys.GoogleMaps}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={depart}
        zoom={20}
      >
         
         <Button onClick={calculateRoute}>voir direction</Button>
        <Marker position= {depart}/>
        <Marker position= {arrivee}/>
       {directionResponse && <DirectionsRenderer directions={directionResponse}/>}
          {/* <Polyline path={ pathCoordinates}
         options={{
          strokeColor: "#ff2527",
          strokeOpacity: 0.75,
          strokeWeight: 5,
      }}/> */}
      </GoogleMap>
    </LoadScript>
   
  );
}

export default MapDetails