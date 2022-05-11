import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import { useState,forwardRef } from 'react';
const AcceptSnackbar = ({nom,prenom,handleAcceptLocataire,handleCloseDialog}) => {
    const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    return ( 
        <Stack spacing={2} sx={{ width: '100%' }}>
        
        <Button onClick={()=>{handleClick();handleAcceptLocataire();}} >Accepter</Button>
        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            le locataire {nom+" "+prenom} est accepté !
          </Alert>
        </Snackbar> 
        </Stack>
     );
}
 
export default AcceptSnackbar;