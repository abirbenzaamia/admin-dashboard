import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
  } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState} from 'react';
import {addAM} from '../../../modules/Users/ams.crud'


  
const AMsListToolbar = (props) => {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [email, setEmail] = useState();
  const [num_tel, setNumtel] = useState();
  const [mdp, setMdp] = useState();

  const handleSubmit = () => {
    addAM(nom,prenom,email,num_tel,mdp).then(({ data }) => {
     
    })
    .catch(err => {
      console.log(err)
    })
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Liste des agents de maintenance
      </Typography>
      <Box sx={{ m: 1 }}>
     
    
        <Button
          color="primary"
          variant="contained" onClick={handleClickOpen}
        >
          Ajouter un AM
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un AM</DialogTitle>
        <DialogContent sx={{margin:2}}>
          <DialogContentText>
            Remplissez ce formulaire pour ajouter un compte
          </DialogContentText>
         <form noValidate autoComplete='off' >
         <TextField
            
            margin="dense"
            id="nom"
            label="Nom"
            type="string"
            fullWidth
            variant="standard"
            onChange={e => setNom(e.target.value)}
          />
          <TextField
            
            margin="dense"
            id="prenom"
            label="Prénom"
            type="string"
            fullWidth
            variant="standard"
            onChange={e => setPrenom(e.target.value)}
          />
          <TextField
            
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            
            margin="dense"
            id="num_tel"
            label="N° téléphone"
            type="string"
            fullWidth
            variant="standard"
            onChange={e => setNumtel(e.target.value)}
          />
           <TextField
            
            margin="dense"
            id="mdp"
            label="Mot de passe"
            type="password"
            fullWidth
            variant="standard"
            onChange={e => setMdp(e.target.value)}
          />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleSubmit} >Ajouter</Button>
        </DialogActions>
      </Dialog>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>);
}
  

  
  export default AMsListToolbar;