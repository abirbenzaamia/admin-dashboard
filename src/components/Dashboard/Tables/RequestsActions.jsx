import React, { useState, useRef, useEffect } from 'react';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {acceptLocataire } from '../../../modules/Users/locataires.crud';
import {refuseLocataire} from '../../../modules/Users/locataires.crud';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button,TextField,} from '@mui/material';

export default function PositionedMenu({id}) {
  const [argument, setArgument] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //setting for message
  
  //setting for dialog
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
//accepting locataire
const handleAcceptLocataire = () => {
  acceptLocataire(id,argument).then(({ data }) => {
   console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
}
//refusing locataire
const handleRefuseLocataire = () => {
  refuseLocataire(id,argument).then(({ data }) => {
   console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
}
  return (
              <div className="relative inline-flex ml-3">
          <IconButton  id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
               <MoreHorizRoundedIcon/>
             
</IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem  onClick={handleClose}> <PermIdentityIcon/> Voir profil </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem sx={{color : '#56CA00'}} onClick={handleClickOpenAlert}>Accepter</MenuItem>
        {/* form for accepting  */}
        <Dialog open={openAlert} onClose={handleCloseAlert}>
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
          <Button onClick={handleCloseAlert}>Annuler</Button>
          <Button onClick={handleAcceptLocataire}>Accepter</Button>
        </DialogActions>
      </Dialog>
        <MenuItem  sx={{color : '#FF4C51'}} onClick={handleClickOpenAlert}>Refuser</MenuItem>
        {/* form for refusing  */}
        <Dialog open={openAlert} onClose={handleCloseAlert}>
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
          <Button onClick={handleCloseAlert}>Annuler</Button>
          <Button onClick={handleRefuseLocataire}>Refuser</Button>
        </DialogActions>
      </Dialog>
      </Menu>
    </div>
  );
    }


