import { useState} from 'react';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import {RequestInfo} from './RequestInfo'
import Dialog from '@mui/material/Dialog';
import AcceptDialog from './AcceptDialog';
import RefuseDialog from './RefuseDialog';
import MenuItem from '@mui/material/MenuItem';
export default function PositionedMenu({user}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Accepting
  const [openAlertAccept, setOpenAlertAccept] = useState(false);
  const handleOpenAlertAccept = () => {
    setOpenAlertAccept(true);
  };
  const handleCloseAlertAccept = () => {
    setOpenAlertAccept(false);
  };
 
  //Refusing
  const [openAlertRefuse, setOpenAlertRefuse] = useState(false);

  const handleOpenAlertRefuse = () => {
    setOpenAlertRefuse(true);
  };

  const handleCloseAlertRefuse = () => {
    setOpenAlertRefuse(false);
  };



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
        <RequestInfo user={user} handleOpenAlertAccept={handleOpenAlertAccept} handleOpenAlertRefuse={handleOpenAlertRefuse} handleCloseMenu={handleClose}  />
        <Divider sx={{ my: 0.5 }} />
        <MenuItem sx={{color : '#56CA00'}} onClick={()=>{handleClose();handleOpenAlertAccept();}}>Accepter</MenuItem>
        <MenuItem  sx={{color : '#FF4C51'}} onClick={()=>{handleClose();handleOpenAlertRefuse();}}>Refuser</MenuItem>

      </Menu>
      {/* AcceptDialog */}
      <Dialog open={openAlertAccept} onClose={handleCloseAlertAccept} >
        <AcceptDialog id={user.id} nom={user.nom} prenom={user.prenom} handleCloseAlertAccept={handleCloseAlertAccept}/>
      </Dialog>  
      {/* RefuseDialog */}
      <Dialog open={openAlertRefuse} onClose={handleCloseAlertRefuse}>
      <RefuseDialog id={user.id} nom={user.nom} prenom={user.prenom} handleCloseAlertRefuse={handleCloseAlertRefuse}/>
      </Dialog>

       </div>
  );
    }


