import * as React from 'react';
import { useState, Fragment } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { Player} from '@lottiefiles/react-lottie-player';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import LogoAutoRun from '../../assets/Logos/AutoRun_logo.svg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import Animation from '../../assets/illusrations/animated/login_illustration.json'
import {loginATC} from '../../modules/Auth/Auth.crud'
const theme = createTheme();
// async function loginATC(credentials) {
//   console.log(JSON.stringify(credentials));
//  return fetch('https://wyerkn74ia.execute-api.eu-west-3.amazonaws.com/login/atc', {
//    method: 'POST',
//    headers: {
//     'Access-Control-Allow-Origin': true,
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json());
// }
export default function Login() {
   //const classes = useStyles();
   const [email, setEmail] = useState();
   const [mdp, setMdp] = useState();
   //const [id, setId] = useState();
 
   const handleSubmit = async e => {
     e.preventDefault();
     const response = await loginATC(
       email,
       mdp
     );
     console.log(response);
      if ('user' in response.data) {
          localStorage.setItem('accessToken', response.headers.authorization);
          localStorage.setItem('user', JSON.stringify(response.data['user']));
          window.location.href = "/dashboard";
      } else {
        console.log(response.message);
      }
   }
  // ** States
 const [values, setValues] = useState({
  showMdp: false
})


const handleClickShowMdp = () => {
  setValues({ ...values, showMdp: !values.showMdp })
}

const handleMouseDownMdp = event => {
  event.preventDefault()
}
  return (
    <ThemeProvider theme={theme}>
            <Box
               sx={{
                padding :13 ,
                background: 'linear-gradient(#6a11cb 0%, #2575fc 100%)',
              }} >
 <Grid
  container
   spacing={0}
  direction="row"
padding="3%"
  sx={{
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: 2,
    minWidth: 250,
    margin:'auto'
  }}
 >
  <Grid item xs={6}
   container
  direction="column"
  alignItems="center"
  justify="center">
   {/* card for sign in */}

        
          <Box sx={{ mb: 6,align:'center' }}>
              <CardMedia image={LogoAutoRun} sx={{height:110,width:135,margin:'auto'}}></CardMedia>
            
          </Box>
          <Box sx={{ mb: 6,align:'center',pl:10,pr:10 }}>
          <form noValidate autoComplete='off' onSubmit={handleSubmit} >
            <TextField 
            fullWidth
             autoFocus 
             id='email'
              label='Email'
               sx={{ marginBottom: 4,ml:2,mr:2,borderRadius: 10}}
               onChange={e => setEmail(e.target.value)}/>
            <FormControl   fullWidth sx={{ marginBottom: 4 ,ml:2,mr:2}}>
              <InputLabel htmlFor='auth-register-password'>Mot de passe</InputLabel>
              <OutlinedInput
                label='Mot de passe'
                id='auth-register-password'
                onChange={e => setMdp(e.target.value)}
                type={values.showMdp ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowMdp}
                      onMouseDown={handleMouseDownMdp}
                      aria-label='toggle password visibility'
                    >
                      {values.showMdp ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel
            sx={{ mb: 2 , mt:2 }}
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>Rester connecté</span>
                </Fragment>
              }
            />
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 ,  borderRadius: 10 ,background: ' #2575fc'  }}>
              se connecter
            </Button>
   
           
          </form>
          </Box>

         
   
  </Grid>
  <Grid item xs={6}
   container
   direction="row"
   alignItems="center"
   justify="center">
    {/* illustration */}
    <Container maxWidth="sm" style={{backgroundColor:'#FFFFFF'}}>

<Player
autoplay
loop
src={Animation}
style={{ height: 'auto', width: '100%' }}>
</Player>
</Container>
  </Grid>
</Grid>

 </Box>
 
    </ThemeProvider>
  );
}