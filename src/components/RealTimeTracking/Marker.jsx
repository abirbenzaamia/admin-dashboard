import { GoogleMap, LoadScript ,Marker,InfoWindow,Polyline,StandaloneSearchBox} from '@react-google-maps/api';
import React, { useState, useEffect } from "react";
import { Services} from "../../services/webSocket.services";
import socketIOClient from "socket.io-client";

const Markers = ({carsId}) => {
  const socket = socketIOClient(Services.WEB_SOCKET_URL);
  const [cars, setCars] = useState(new Map())
  useEffect(() => {
    socket.emit("subscribe", carsId);
    socket.on("position_update", data => {
      console.log(data.idVehicule);
      setCars(cars.set(data.idVehicule,data));
      //console.log(cordination);  
      //console.log('hhhhhhh');
    });
    console.log('hhhhhhh');
  }, []);
  var iconPin = {
    // path: google.maps.SymbolPath.CIRCLE,
    url: (require("../../assets/icons/car.png")),
    fillColor: '#4361ee',
    scale: 0.03,
  };
  return ( 
    <div>
   {
                  [...cars.keys()].map(k => (
                 
                    <Marker position={
                      {
                      lat : cars.get(k).infoVehicule.latitude,
                      lng : cars.get(k).infoVehicule.logitude
                    }
                  }   icon={iconPin}
                   zIndex={10} 
                   //{showDetails(cars.get(k).idVehicule)}
                   onClick={console.log("hhhhhhhhhh")}
                    />
                  ))
               }
    </div>
 
   );
}
 
export default Markers;