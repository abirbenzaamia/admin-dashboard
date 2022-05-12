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
import {getLocataireInfo} from '../../../modules/Users/locataires.crud'
  
 const UserProfile = ({user}) => {
  //const [user, setUser] = useState([]);
  
  console.log(user);
  // useEffect(() => {
  //   getLocataireInfo(user.id).then(({ data }) => {
  //     setUser(data.user);
  //     console.log(data.user);


  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  //}, [props.id])
  return (
    <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.Locataire.photo}
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
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
         
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
     
    </CardActions>
  </Card>
   );
 }
 
   
  export default UserProfile;