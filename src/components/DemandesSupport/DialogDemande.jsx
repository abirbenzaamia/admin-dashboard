import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { repondreDemandeSupport } from '../../modules/DemandesSupport/demande-support.crud';
import { useState } from 'react';

const DialogDemand = ({id,open,handleClose}) => {
    const [message, setMessage] = useState();
    const handleRepondreDemande = () => {
        repondreDemandeSupport(id,message).then(({ data }) => {
         console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
      }
    return (
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Demande de support</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pour répondre à cette demande de support , veuillez saisir votre message  :
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >Annuler</Button>
          <Button onClick={()=>{handleRepondreDemande();handleClose();}}>Envoyer</Button>
        </DialogActions>
      </Dialog> );
}
 
export default DialogDemand;