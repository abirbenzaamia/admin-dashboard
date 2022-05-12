import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {getAMInfo} from '../../modules/Users/ams.crud.js'
import {useState , useEffect} from 'react'

export const VehicleCard = ({vehicule}) => {
  const [am,setAM] = useState();
  useEffect(() => {
    getAMInfo(vehicule.am.amId).then(({ data }) => {
      setAM(data.user);
      console.log(data.user);

    })
    .catch(err => {
      console.log(err)
    })
  }, [vehicule.am.amId])
  return (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
       
      </Box>
      
      <Typography
         align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {vehicule.marque +' '+vehicule.modele}
      </Typography>
      <Grid sx={{ m:0,p:1, border: '1px ' ,borderRadius: '5px',backgroundColor:'#BAC6F8'}}>

      <Typography
        align="center"
        color="textPrimary"
        variant="h6"
      >
       Matricule 
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        
      >
     {vehicule.matricule}
      </Typography>
  </Grid>
  <Grid container spacing={0} sx={{justifyContent: 'space-between' }}>
    <Grid item xs={3} sx={{ mt:2,p:0.5, border: '1px ' ,borderRadius: '5px',backgroundColor:'#BAC6F8'}}>
    <Typography
        align="center"
        color="textPrimary"
        variant="h6"
      >
       Modèle 
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        
      >
     {vehicule.modele}
      </Typography>
    </Grid>
    <Grid item xs={4}sx={{ mt:2,p:0.5, border: '1px ' ,borderRadius: '5px',backgroundColor:'#BAC6F8'}}>
    <Typography
        align="center"
        color="textPrimary"
        variant="h6"
      >
       Marque
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        
      >
     {vehicule.marque}
      </Typography>
 </Grid>
 <Grid item xs={3}sx={{ mt:2,p:0.5, border: '1px ' ,borderRadius: '5px',backgroundColor:'#BAC6F8'}}>
 <Typography
        align="center"
        color="textPrimary"
        variant="h6"
      >
     Couleur
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        
      >
     {vehicule.couleur}
      </Typography>
 </Grid>

  </Grid>
      
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <ClockIcon color="action" /> */}
          {am && <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Affecté à  {am.nom+' '+am.prenom}
          </Typography>}

        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {/* <DownloadIcon color="action" /> */}
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {' '}
            {' '}
            <Link to={`/am/${vehicule.am.amId}`} underline="none" ><Button  sx={{color:'#4361EE'}}> Voir l'AM</Button></Link>

          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>);
}

VehicleCard.propTypes = {
  vehicule: PropTypes.object.isRequired
};
