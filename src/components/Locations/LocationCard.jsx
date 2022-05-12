import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import LocationMap from './LocationMap';
import { getLocataireInfo } from '../../modules/Users/locataires.crud';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Geocode from "react-geocode"; 

export const LocationCard = ({location}) => {

const [user,setUser] = useState()

  useEffect(() => {
    getLocataireInfo(location.locataire.locataireId).then(({ data }) => {
      setUser(data.user);
      console.log(data.user);

    })
    .catch(err => {
      console.log(err)
    })
  }, [location.locataire.locataireId])
  return (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
  >
    

    
    <Grid sx={{m:3,mb:0}}>
    <Grid container >
  <Grid item sx={{ m:2,mr:1,p: 0}}>
  {location.terminee === true
    ?<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
    Terminé
  </Alert>
    : <Alert severity="success">This is a success alert — check it out!</Alert>
    }
  </Grid>
  <Grid  item sx={{ m:2,ml:0,p: 0}}>
  <Button  sx={{color:'#4361EE'}}>Voir la carte</Button>

</Grid>
</Grid>
      
    </Grid>
    
    
    <CardContent>   
        
      <Grid item  container >
  <Grid sx={{ m:2,mr:1,p: 0}}>
  <Typography 
      color="textPrimary"
      gutterBottom
      variant="h6"
    >
     Départ
    </Typography>
  </Grid>
  <Grid  sx={{ m:2,ml:0,p: 0}}>
    
       <Typography
      color="textPrimary"
      variant="body1"
    >
     
      Q67P+VF3, Bordj El Kiffan, Algérie
    </Typography>
    
 
</Grid>
</Grid>
<Grid item  container >
  <Grid sx={{ m:2,mr:1,p: 0}}>
  <Typography 
      color="textPrimary"
      gutterBottom
      variant="h6"
    >
     Arrivée 
    </Typography>
  </Grid>
  <Grid  sx={{ m:2,ml:0,p: 0}}>
  <Typography
      color="textPrimary"
      variant="body1"
    >
   67P+VF3, Bordj El Kiffan, Algérie
    </Typography>
</Grid>
</Grid>


      
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
      
          {user && <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
           Véhicule réservé : {location.vehicule.marque+' '+location.vehicule.modele}
          </Typography> }
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <ClockIcon color="action" /> */}
          {user && <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
           Effectuée par : {user.nom+' '+user.prenom}
          </Typography> }
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <ClockIcon color="action" /> */}
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Date de reservation : {location.dateLocation.slice(0,10)+" à "+location.dateLocation.slice(11,19)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            alignItems: 'center',
            display: 'flex',
            
          }}
        >
         <Grid>

         </Grid>
         <Link to={`/locataire/${location.locataire.locataireId}`} underline="none" ><Button  sx={{color:'#4361EE'}}> Voir Locataire</Button></Link>
          
          <Button  sx={{color:'#4361EE'}}>Voir Vehicule</Button>
        </Grid>
      </Grid>
    </Box>
      <LocationMap latDep={location.latitudeDepart} longDep={location.longitudeDepart} latArv={location.latitudeArrivee} longArv={location.longitudeArrivee}/>  
  </Card>
  )
}
  


LocationCard.propTypes = {
  location: PropTypes.object.isRequired
};
