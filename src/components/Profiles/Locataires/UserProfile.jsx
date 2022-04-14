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
  
  const user = {
    avatar: '../../assets/images/atc.jpg',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
  };
  
 const UserProfile = (props) => {
  const [user, setUser] = useState([]);
  console.log(props.id);
  useEffect(() => {
    getLocataireInfo(props.id).then(({ data }) => {
      setUser(data.user);
      console.log(data.user);


    })
    .catch(err => {
      console.log(err)
    })
  }, [props.id])
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