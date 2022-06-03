
import { Box, Container, Grid, Pagination } from '@mui/material';
import { useState,useEffect } from 'react';
import { getVehicules} from '../../modules/Vehicles/vehicles.crud'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import MapGlobalView from '../../components/RealTimeTracking/MapGlobalView'
const VehiclesTracking = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
   
  return (
    
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
    <main>
   
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
    <MapGlobalView />
    </Box>
    </main>

    </div>
    </div>
    </div>
  )
}
  




export default VehiclesTracking;
