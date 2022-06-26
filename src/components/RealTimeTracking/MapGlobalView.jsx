// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript ,Marker,InfoWindow,Polyline,StandaloneSearchBox} from '@react-google-maps/api';
// import { Services, APIKeys } from "../../services/webSocket.services";
// import Markers from "./Marker";
// import socketIOClient from "socket.io-client";
// function MyComponent({vehicules}) {
//     const center = {
//      lat: 36.7216959,
//       lng: 3.1254200 
//    };
//   const carsId = [];
//   const [cars, setCars] = useState(new Map())
//     //get cars ids 
//  vehicules.forEach(car => {
//    carsId.push(car.idVehicule)
//  });
//   // useEffect(() => {
//   //   socket.emit("subscribe", carsId);
//   //   socket.on("position_update", data => {
//   //     console.log(data.idVehicule)
//   // //console.log(cordination);  
//   // //console.log('hhhhhhh');
//   //   });
//   //   console.log('hhhhhhh');
//   // }, []);
  
//     var iconPin = {
//     // path: google.maps.SymbolPath.CIRCLE,
//     url: (require("../../assets/icons/car.png")),
//     fillColor: '#4361ee',
//     scale: 0.03,
//   };
  
 
// const containerStyle = {
//   width: '100%',
//   height: '300px'
//  } 
//   return (
    
//     <LoadScript  googleMapsApiKey={APIKeys.GoogleMaps}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={20}
//       >      
//        {/* <Markers carsId={carsId}/> */}    
//       </GoogleMap>
//     </LoadScript> 
//   );
// 
 //export default MyComponent
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
 import { BiCar } from "react-icons/bi"
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
  //Websocket
  const [ws, setWebsocket] = useState(null)
 // const getupdate =()=>{
 //const url = Services.WEB_SOCKET_URL;
 // setWebsocket(()=>{
 //   const ws = new WebSocket(url);
 //   ws.emit("subscribe", carsId);
 //   ws.on("position_update", data => {
 //     //console.log(data)
 //     setCars(cars.set(data.idVehicule,data));
 //     //console.log(data)
 //    //console.log(position);
 //   }
 // },
 // }
   //console.log(carsId);   
   // const getUpdate = ()=>{
   //   const socket = socketIOClient(Services.WEB_SOCKET_URL);
   //   socket.emit("subscribe", carsId);
   //   socket.on("position_update", data => {
   //     //console.log(data)
   //     setCars(cars.set(data.idVehicule,data));
   //     //console.log(data)
   //    //console.log(position);
   //   });
   // }  
    useEffect(() => {
      console.log(carsId);
      socket.emit("subscribe", [10,100,101]);
      socket.on("position_update", data => {
        //console.log(data)
        setCars(cars.set(data.idVehicule,data));
        //console.log(data)
       //console.log(position);
      });
      //socket.disconnect();
      //return () => socket.close();
    }, [cars, carsId, socket])
   //console.clear();
    console.log(cars);
 const containerStyle = {
   width: '100%',
   height: '500px'
  } 
  var iconPin = {
    // path: google.maps.SymbolPath.CIRCLE,
    url: (require("../../assets/icons/car.png")),
    fillColor: '#4361ee',
    scale: 0.03,
  };
 //  var iconPin = {
 //   path: "../../assets/icons/local.svg",
 //   fillColor: '#4361ee',
 //   fillOpacity: 1,
 //   scale: 0.03, //to reduce the size of icons
 //  };
   return (
     <LoadScript  googleMapsApiKey={APIKeys.GoogleMaps} language="french" region="Algiers">
       <GoogleMap
         mapContainerStyle={containerStyle}
        center={center}
         zoom={5}
       >
         {
         }
         {
           [...cars.keys()].map(k => (
             //  current.lat = cars.get(k).infoVehicule.latitude,
             //  current.lng = cars.get(k).infoVehicule.logitude
             <Marker position={
               {
               lat : cars.get(k).infoVehicule.latitude,
               lng : cars.get(k).infoVehicule.logitude

             }
           }   icon={iconPin}
            zIndex={10} 
            //{showDetails(cars.get(k).idVehicule)}
             //onClick={showDetails(cars.get(k).idVehicule)}
             />
           ))
         }
 {/* <Marker position= {center} icon={iconPin} zIndex={10} clickable={true} /> */}
       </GoogleMap>
     </LoadScript> 
   );
      }