import { useState} from 'react';
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
  

  
 const MyAccount = (props) => {
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);
    return user;
  });

  return (
    <Card {...props}>
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
        Upload picture
      </Button>
    </CardActions>
  </Card>
   );
 }
 
   
  export default MyAccount;