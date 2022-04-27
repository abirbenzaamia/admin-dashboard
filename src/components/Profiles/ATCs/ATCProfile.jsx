import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
  import { useState , useEffect } from 'react';
//import {getATCInfo} from '../../../modules/Users/atcs.crud'
  
 const ATCProfile = ({user}) => {
  //const [user, setUser] = useState(props.user);

  return (
    <Card >
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {`${user.nom} ${user.prenom}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.type_utilisateur}
          
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.createdAt}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Télécharger une photo
      </Button>
    </CardActions>
  </Card>
   );
 }
 
   
  export default ATCProfile;