
import { Box, Grid} from '@mui/material';
import { useState,useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Geocode from "react-geocode"; 
import Header from '../../components/Header/Header';
import ActiveReservationsList from '../../components/Tracking/ActiveReservationsList'
import ActiveReservationDetails from '../../components/Tracking/VehicleDetails'
import MapDetails from '../../components/Tracking/Map'
import VehiclesList from '../../components/Tracking/VehiclesList';
import { Divider } from '@material-ui/core';
import { getLocations } from '../../modules/Vehicles/locations.crud';
import { APIKeys } from '../../services/webSocket.services'
import { getVehicules} from '../../modules/Vehicles/vehicles.crud'

const VehiclesTracking = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locations, setLocations] = useState();
  const [showActiveReservationDetails, setShowActiveReservationDetails] = useState(false);
  const [width,setWidth] = useState(15);
  const [idReservation,setIdReservation] = useState();
  const [vehicules, setVehicules] = useState();


  Geocode.setApiKey(APIKeys.GoogleMaps);
  const _getNameAdress =  async (lat,long) => {
    let adress ;
    await Geocode.fromLatLng(lat, long).then(
      (response) => {
        adress = response.results[0].formatted_address;
        console.log(adress);
      },
      (error) => {
        console.error(error);
      }
    );
    
    return adress ;
  }
    useEffect(() => {
      const getReservations = async ()=>{
        var vehicules = []
        const response = await getLocations();
        console.log(response);
        const data = response.data;
        for (const row of data ){
          const adresseDep = await _getNameAdress( row.latitudeDepart,row.longitudeDepart);
          const adresseArv = await  _getNameAdress( row.latitudeArrivee,row.longitudeArrivee);
          vehicules.push({id:row.idLocation,matricule:row.vehicule.matricule,vehicule:row.vehicule.marque+" "+row.vehicule.modele,depart:adresseDep,arrivee:adresseArv,locataire:row.locataire.photo,id_locataire:row.locataire.locataireId,etat:row.vehicule.verrouillee});

        }
        setLocations(vehicules); 
        console.log(locations)
      }
      getReservations()
    // make sure to catch any error
    .catch(console.error);
}, [])
useEffect(() => {
  var cars = []
  getVehicules().then(({ data }) => {
    //setVehicules(data);
    for (const row of data ){
      cars.push({id:row.idVehicule,matricule:row.matricule,vehicule: row.marque+'-'+row.modele,couleur:row.couleur,verrouillee:row.verrouillee,enService:row.enService,am:row.am.amId,type:row.typeVehicule.valTypeVehicule,tarif:row.typeVehicule.tarifHeure});
    }
    setVehicules(cars);
    console.log(cars);
  })
  .catch(err => {
    console.log(err)
  })
}, [])
    const handleClickShowActiveReservationDetails = (id) =>{
      setShowActiveReservationDetails(false);
      console.log('avant',id);
      setIdReservation(id);
      console.log('apres',id);
      setShowActiveReservationDetails(true);
      setWidth(10);
      //setIdReservation(id);
    }
     
    
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
    <Grid container spacing={0} columns={15}>
  <Grid item xs={width} >
  <Box
      component="main"
      sx={{
        //flexGrow: 1,
        p:2,
        pt:3,
        m:0,
        borderRadius:0,
      }}
     
    >
      <Grid container spacing={0}>
      <Grid item xs={6} md={12} sx={{m:2}}>
        {console.log('yes',idReservation)}
      {showActiveReservationDetails && <MapDetails id={idReservation} />}
      </Grid>
      <Grid item xs={6} md={12} >
      {locations &&  <ActiveReservationsList vehicules={locations} handleClickShowActiveReservationDetails={handleClickShowActiveReservationDetails}/>}
      </Grid>
      </Grid>
     
    </Box>
    
  </Grid>
 <Divider orientation="vertical" flexItem /> 
   
  <Grid item xs={4.95} > 
  <Box
      component="main"
      sx={{
        flexGrow: 1,
        p:0,
        m:0,

        pl:2,
        pt:2,
        ml:2,
        mt:2
      }}
    >
    {showActiveReservationDetails && <ActiveReservationDetails id={idReservation} />}
    </Box>
     
  </Grid>
 
  
</Grid>  
      <Grid container spacing={0} columns={15}>
      <Grid item xs={15} >
      <Box
      component="main"
      sx={{
        //flexGrow: 1,
        p:2,
        m:0,
        borderRadius:0,
      }}   >
     {  vehicules && <VehiclesList vehicules={vehicules}  />}

      </Box>
        </Grid>
      </Grid>
    </main>

    </div>
    </div>
    </div>
  )
}
  




export default VehiclesTracking;
