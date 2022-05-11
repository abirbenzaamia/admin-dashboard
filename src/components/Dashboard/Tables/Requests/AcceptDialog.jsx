import { useState} from 'react';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button,TextField,} from '@mui/material';
import {acceptLocataire } from '../../../../modules/Users/locataires.crud';
import AcceptSnackbar from './AcceptSnackbar';
const AcceptDialog = ({id,nom,prenom,handleCloseAlertAccept}) => {
  //Snackbar
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };
  // const Alert = forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });
  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };
    const [argument, setArgument] = useState();
     //Accepting
  const handleAcceptLocataire = () => {
    acceptLocataire(id,argument).then(({ data }) => {
     console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
    return ( 
        <div>
              <DialogTitle>Accepter une demande</DialogTitle>
        <DialogContent sx={{margin:2}}>
          <DialogContentText>
            L'argument d'acceptation
          </DialogContentText>
         <form noValidate autoComplete='off' >
         <TextField
            autoFocus
            margin="dense"
            id="argument"
            label="Argument"
            multiline
            type="string"
            fullWidth
            required
            variant="standard"
            onChange={e => setArgument(e.target.value)}/>
         </form>
        </DialogContent>
        <DialogActions>
          <AcceptSnackbar nom={nom} prenom={prenom} handleAcceptLocataire={handleAcceptLocataire}  />
          <Button onClick={handleCloseAlertAccept}>Annuler</Button>
        </DialogActions>
        </div>
     );
}
 
export default AcceptDialog;