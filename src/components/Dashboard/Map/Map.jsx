import React from 'react'
import { GoogleMap, LoadScript ,Marker} from '@react-google-maps/api';
const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat:  36.7206251,
  lng: 3.1854975
};

function MyComponent() {
  return (
   
    <LoadScript
     //googleMapsApiKey="AIzaSyCNlMLcA7MWfT74tsN8rmw624Z54aY2R8Y"
     googleMapsApiKey="AIzaSyCNdS-eHQeAsWyQ6xIEwROKmkgaA7zm6a4"
    
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
       <Marker position= {center}></Marker>
      </GoogleMap>
    </LoadScript>
   
  )
}

export default React.memo(MyComponent)