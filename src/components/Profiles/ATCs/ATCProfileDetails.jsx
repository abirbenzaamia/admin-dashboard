import { useState , useEffect } from 'react';
import {getATCInfo} from '../../../modules/Users/atcs.crud'



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
import {modifyInfoATC} from '../../../modules/Users/atcs.crud'


const ATCProfileDetails = ({user}) => {
  console.log(user);
  const [id,setId] = useState(user.id);
  const [nom, setNom] = useState(user.nom);
  const [prenom, setPrenom] = useState(user.prenom);
  const [email, setEmail] = useState(user.email);
  const [num_tel, setNumtel] = useState(user.num_tel);
  
  const handleSubmit = () => {
    modifyInfoATC(id,nom,prenom,email,num_tel).then(({ data }) => {
      window.location.reload(false);
     console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
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
              label="Nom"
              name="nom"
              value={nom}
              variant="outlined"
              onChange={e => setNom(e.target.value)}
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
              onChange={e => setPrenom(e.target.value)}
              value={prenom}
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
              onChange={e => setEmail(e.target.value)}
              value={email}
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
              onChange={e => setNumtel(e.target.value)}
              type="number"
              value={num_tel}
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


export default ATCProfileDetails;