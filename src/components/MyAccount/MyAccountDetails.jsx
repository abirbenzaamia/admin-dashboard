import { useState , useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid
} from '@mui/material';
import TextField from '@mui/material/TextField';
import {modifyInfoATC} from '../../modules/Users/atcs.crud'

const MyAccountDetails = () => {
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const user = JSON.parse(saved);
    return user;
  });



  const handleSubmit = () => {
    modifyInfoATC(user.id,user.nom,user.prenom,user.email,user.num_tel).then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data['user']));
      window.location.reload(false);
     console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };
  return (
    <form
    autoComplete="off"
    noValidate


  >
    <Card>
      <CardHeader
        subheader="Vous pouvez modifier vos informations"
        title="Mon Profil"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              helperText="Please specify the first name"
              label="Nom"
              name="nom"
              value={user.nom}
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Prénom"
              name="prenom"
              onChange={handleChange}
              value={user.prenom}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Adresse email"
              name="email"
              onChange={handleChange}
              value={user.email}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Numéro de téléphone"
              name="num_tel"
              onChange={handleChange}
              type="number"
              value={user.num_tel}
              variant="outlined"
            />
          </Grid>
         
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Sauvegarder
        </Button>
      </Box>
    </Card>
  </form>
  );
};


export default MyAccountDetails;