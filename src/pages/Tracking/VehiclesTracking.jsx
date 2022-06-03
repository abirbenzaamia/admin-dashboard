
import { Box, Container, Grid, Pagination } from '@mui/material';
import { useState,useEffect } from 'react';
import { getVehicules} from '../../modules/Vehicles/vehicles.crud'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import ActiveReservationsList from '../../components/Tracking/ActiveReservationsList'
import { getLocations } from '../../modules/Vehicles/locations.crud';
const VehiclesTracking = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locations, setLocations] = useState();
    useEffect(() => {
      getLocations().then(({ data }) => {
        //setLocations(data);
        //console.log(data);
        var vehicules = [];
        data.forEach(row => {
          //console.log(row);
          vehicules.push({id:row.idLocation,matricule:row.vehicule.matricule,vehicule:row.vehicule.marque+" "+row.vehicule.modele,depart:"test",arrivee:"test",locataire:row.locataire.photo,id_locataire:row.locataire.locataireId,etat:row.vehicule.verrouillee});
        });
        setLocations(vehicules);
        console.log(locations);
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
   //console.log(locations);
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
        p: 8
      }}
    >
      {locations &&  <ActiveReservationsList vehicules={locations}/>}
   
    </Box>
    </main>

    </div>
    </div>
    </div>
  )
}
  




export default VehiclesTracking;
