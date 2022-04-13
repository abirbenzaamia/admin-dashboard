import React, { useState, useRef, useEffect } from 'react';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {acceptLocataire } from '../../../modules/Users/locataires.crud';
import {refuseLocataire} from '../../../modules/Users/locataires.crud';


export default function PositionedMenu({id,argument}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem sx={{color : '#56CA00'}} onClick={handleAcceptLocataire}>Accepter</MenuItem>
        <MenuItem  sx={{color : '#FF4C51'}} onClick={handleRefuseLocataire}>Refuser</MenuItem>
      </Menu>
    </div>
  );
    }


