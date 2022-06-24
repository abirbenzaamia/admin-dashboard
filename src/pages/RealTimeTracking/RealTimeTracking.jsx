
import { Box, Container, Grid, Pagination, Divider } from '@mui/material';
import { useState,useEffect } from 'react';
import { getVehicules} from '../../modules/Vehicles/vehicles.crud'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import MapGlobalView from '../../components/RealTimeTracking/MapGlobalView'
import VehicleDetails from '../../components/RealTimeTracking/VehicleDetails';
const VehiclesTracking = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [vehicules,setVehicules] = useState();

  useEffect (()=>{
    const getListVehicules = async ()=>{
      const response = await getVehicules();
      setVehicules(response.data);
      //console.log(vehicules)
    }
    getListVehicules()
    .catch(console.error);
  })
  //shopw details 
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const [width,setWidth] = useState(15);
  const [idReservation,setIdReservation] = useState();
  const handleClickShowActiveReservationDetails = (id) =>{
    setShowVehicleDetails(false);
    setShowVehicleDetails(true);
    setWidth(10);
    setIdReservation(id);
  }
  return (
    
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
    <main>
    <Grid container spacing={0} columns={15}>
  <Grid item xs={width} >
  <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        m:3
      
      }}
    >
    { vehicules && <MapGlobalView vehicules={vehicules}/>}
    </Box>
  </Grid>
  <Divider orientation="vertical" flexItem /> 
  <Grid item xs={4.99} >
  <VehicleDetails />
  </Grid>
  </Grid>

    </main>

    </div>
    </div>
    </div>
  )
}
  




export default VehiclesTracking;
