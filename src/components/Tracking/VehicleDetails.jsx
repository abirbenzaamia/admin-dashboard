import{Box , Avatar, Card, CardContent, Divider, Grid, Typography , Button} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { IoIosPaperPlane } from "react-icons/io";
import { BsLightningCharge } from "react-icons/bs";
import { useEffect,useState } from 'react';
import {getLocationInfo} from '../../modules/Vehicles/locations.crud'
import {getLocataireInfo} from '../../modules/Users/locataires.crud'
const VehicleDetails = ({id}) => {
    const [reservation,setReservation] = useState();
    const [locataire,setLocataires] = useState();
    useEffect(()=>{
      const getReservationDetails = async ()=>{
        const response = await getLocationInfo(id);
        console.log(response.data);
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

    return !(reservation) ? null :( 
        <div >
         <Box sx={{m:0}}>
             {/* First column */}
         <Grid container spacing={2}>
             {/* First row */}
         {/* informations récupérées depuis les ordinateurs de bord */}
         </Grid>
         <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              {reservation.vehicule.marque +' - '+reservation.vehicule.modele}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              30%
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
            <BsLightningCharge/>
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" sx={{mt:2,mb:2}}>
            <Grid item >
            <IoIosPaperPlane/>
            </Grid>
            <Grid item sx={{p:1}}>
            <Typography variant="body1" color="initial">
                  current adresse
              </Typography>
           </Grid>
        </Grid>
        <Grid container alignItems="center">
        {/* photo locataire */}
          <Grid item  xs={2}>
             <Avatar src={reservation.locataire.photo} />
             </Grid>
             {/* nom & prenom  */}
             <Grid item xs={6} >
               <Grid item xs={8} >
                 <Typography variant="body2" color="initial">
                     Locataire
                 </Typography>
               </Grid>
              <Typography variant="body1" color="initial">
                 {/* {locataire.nom +' '+locataire.prenom} */}
              </Typography>
             </Grid>
           {/* voir profil */}
           <Grid item xs={4}>
               <Button>
                 Voir profil
               </Button>
           </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ my: 3, mx: 2 }}>
      <Grid container alignItems="center">
          <Grid item >
    <Typography variant="h6" color="initial">
Statistiques
    </Typography>
          </Grid>
      </Grid>
      </Box>
    
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Signaler une anomalie</Button>
      </Box>
         </Box>
        </div>
       
     );
}
 
export default VehicleDetails;