import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useState } from 'react';
import { Box,Container,Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export function RequestInfo({user,handleOpenAlertAccept,handleOpenAlertRefuse,handleCloseMenu}) {
  const [open, setOpen] = useState(false);
  const [id,setId] = useState(user.id)
  const [nom, setNom] = useState(user.nom);
  const [prenom, setPrenom] = useState(user.prenom);
  const [email, setEmail] = useState(user.email);
  const [num_tel, setNumtel] = useState(user.num_tel);
  const [date, setDate] = useState(user.createdAt);
  const [adresse, setAdresse] = useState(user.Locataire.adresse_locataire);
  const [piece, setPiece] = useState(user.Locataire.piece_identite);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <MenuItem  onClick={()=>{handleClickOpen();}}> <PermIdentityIcon/> Voir Infos </MenuItem>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Card xs={12}>

      <CardHeader
        avatar={
          <Avatar alt={nom} src={user.Locataire.photo}/>
        }
        
        title={nom+" "+prenom}
        subheader={"ID: "+id}
        //subheader={"N° télephone: "+num_tel}
        
      />
         
          </Card>
        </BootstrapDialogTitle>
        
        <DialogContent dividers>
        <Grid container spacing={20}>
  <Grid item xs={6}>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          email
        </Typography>
        <Typography  component="div">
          {email}
        </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          N° de téléphone
        </Typography>
        <Typography  component="div">
          {num_tel}
        </Typography>
  </Grid>

        </Grid>
        <Grid container spacing={20}>
  <Grid item xs={6}>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          a rejoint le 
        </Typography>
        <Typography  component="div">
          {date.slice(0,10)+" à "+date.slice(11,19)}
        </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Adresse
        </Typography>
        <Typography  component="div">
       {adresse}
        </Typography>
  </Grid>
        </Grid>
        <Grid container spacing={20}>
  <Grid item xs={12}>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Pièce d'identité
        </Typography>
     <img src={piece} alt="" />
  </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button sx={{color : '#56CA00'}} autoFocus onClick={handleOpenAlertAccept}>
            Accepter
          </Button>
          <Button sx={{color : '#FF4C51'}} autoFocus onClick={handleOpenAlertRefuse}>
            Refuser
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
