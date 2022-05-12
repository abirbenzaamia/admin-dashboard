
import { Box, Container, Grid, Pagination } from '@mui/material';
import { VehicleListToolbar } from '../../components/Vehicles/VehicleListToolbar';
import { VehicleCard } from '../../components/Vehicles/VehicleCard';
import { useState,useEffect } from 'react';
import { getVehicules} from '../../modules/Vehicles/vehicles.crud'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
const VehiclesList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const [vehicules, setVehicules] = useState([]);
   useEffect(() => {
     getVehicules().then(({ data }) => {
       setVehicules(data);
     })
     .catch(err => {
       console.log(err)
     })
   }, [])
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
      <Container maxWidth={false}>
        <VehicleListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {vehicules.map((vehicule) => (
              <Grid
                item
                key={vehicule.idVehicule}
                lg={4}
                md={6}
                xs={12}
              >
                {vehicule && <VehicleCard vehicule={vehicule} />}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
    </main>

    </div>
    </div>
    </div>
  )
}
  




export default VehiclesList;
