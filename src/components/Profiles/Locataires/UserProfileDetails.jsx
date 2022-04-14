import { useState , useEffect } from 'react';
import {getLocataireInfo} from '../../../modules/Users/locataires.crud'



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

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const UserProfileDetails = (props) => {
  const [values, setValues] = useState([]);
  console.log(props.id);
  useEffect(() => {
    getLocataireInfo(props.id).then(({ data }) => {
      setValues(data.user);
      console.log(data.user);

    })
    .catch(err => {
      console.log(err)
    })
  }, [props.id])
  const handleChange = (event) => {
    setValues();
  };
  console.log(values.nom);
  return (
    <form
    autoComplete="off"
    noValidate
    {...props}
  >
    <Card>
      <CardHeader
        subheader="Vous pouvez modifier les données"
        title="Profil"
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
              //label='Nom'
              onChange={handleChange}
              required
              variant="outlined"
              defaultValue={values.nom}
              value={values.nom}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              //label='Prénom'
              onChange={handleChange}
              value={values.prenom}
              required
              variant="outlined"
              defaultValue={values.prenom}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
       <TextField
               fullWidth
               //label="Email"
               name="phone"
               onChange={handleChange}
               value={values.email}
               variant="outlined"
               defaultValue={values.email}
              />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              //label="N° téléphone"
              name="phone"
              onChange={handleChange}
              type="number"
              value={values.num_tel}
              variant="outlined"
              defaultValue={values.num_tel}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
           
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            
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
        >
          Sauvegarger
        </Button>
      </Box>
    </Card>
  </form>
  );
};


export default UserProfileDetails;