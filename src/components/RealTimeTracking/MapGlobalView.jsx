import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript ,Marker,InfoWindow,Polyline,StandaloneSearchBox} from '@react-google-maps/api';
import socketIOClient from "socket.io-client";
import VehicleDetails from './VehicleDetails'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ENDPOINT = "https://autorun-geopositioning.herokuapp.com/";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Map({places}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 ,p:2 ,m:3,borderRadius:1,borderColor:"#707070"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack spacing={3}>
        <Item>Item 3</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>

  );

  const [vehicules,setVehicules] = useState(places)
  const depart = {
    lat: 36.7216959,
     lng: 3.1254200 
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
  width: '2000px',
  height: '1000px',

 } 
 var iconPin = {
  path: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z',
  fillColor: '#4361ee',
  fillOpacity: 1,
  scale: 0.03, //to reduce the size of icons
 };
 
  return (
   
    
    <LoadScript  googleMapsApiKey="AIzaSyCNdS-eHQeAsWyQ6xIEwROKmkgaA7zm6a4" language="french" region="Algiers">
      <GoogleMap
        mapContainerStyle={containerStyle}
       center={current}
        zoom={20}
      >
         
       <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
       <Marker position= {current} icon={iconPin} zIndex={10} clickable={true} onClick={toggleDrawer(anchor, true)}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
      </GoogleMap>
    </LoadScript>
   
  );
}
