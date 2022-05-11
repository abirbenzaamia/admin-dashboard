import { useState} from 'react';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button,TextField,} from '@mui/material';
import {refuseLocataire } from '../../../../modules/Users/locataires.crud';
import RefuseSnackbar from './RefuseSnackbar'
const RefuseDialog = ({id,nom,prenom,handleCloseAlertRefuse}) => {
    const [argument, setArgument] = useState();
//refuse locataire
const handleRefuseLocataire = () => {
    refuseLocataire(id,argument).then(({ data }) => {
     console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
   }
    return ( 
        <div>
             <DialogTitle>Refuser une demande</DialogTitle>
        <DialogContent sx={{margin:2}}>
          <DialogContentText>
            L'argument de refus
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
        <RefuseSnackbar nom={nom} prenom={prenom} handleRefuseLocataire={handleRefuseLocataire}  />

          <Button onClick={handleCloseAlertRefuse}>Annuler</Button>
          
        </DialogActions>
        </div>
     );
}
 
export default RefuseDialog;