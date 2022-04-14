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
import * as React from 'react';

  
const AMsListToolbar = (props) => {
  const [open, setOpen] = React.useState(false);

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
        Liste des agents de maintenances
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
            autoFocus
            margin="dense"
            id="nom"
            label="Nom"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="prenom"
            label="Prénom"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="num_tel"
            label="N° téléphone"
            type="string"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="mdp"
            label="Mot de passe"
            type="password"
            fullWidth
            variant="standard"
          />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose}>Ajouter</Button>
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