import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RoomIcon from '@mui/icons-material/Room';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CardMedia from '@mui/material/CardMedia';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LocataireProfileAll({user}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{m:3,p:0}}>
      <CardHeader
      sx={{p:0,pt:5,pr:5,pl:5}}
        avatar={
          <Avatar
          src={user.Locataire.photo}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        }

        title={user.nom+' '+user.prenom}
        subheader={user.type_utilisateur}
      />
      <CardContent sx={{p:0,pr:5,pl:5}}>
      <Grid container spacing={2}>
  <Grid item xs={5} sx={{ m:2,p: 2}}>
    
      <Typography> < CalendarMonthIcon sx={{ m:0,mr:2}}/>{user.createdAt.slice(0,10)+" à "+user.createdAt.slice(11,19)}</Typography>
  </Grid>
  <Grid item xs={5} sx={{ m:2,p: 2}}>

<Typography> <   RoomIcon sx={{ m:0,mr:2}}/>{user.Locataire.adresse_locataire}</Typography>
</Grid>
</Grid>
      <Grid container spacing={2}>
  <Grid item xs={5} sx={{ m:2,p: 2, border: '1px solid #92a8d1' ,borderRadius: '20px'}}>

      <Typography> < EmailIcon sx={{ m:0,mr:2}}/>{user.email}</Typography>
  </Grid>
  <Grid item xs={5} sx={{ m:2,p: 2, border: '1px solid #92a8d1 ' ,borderRadius: '20px'}}>
  <Typography> <CallIcon sx={{ m:0,mr:2}} />{user.num_tel}</Typography>
  </Grid>
 
</Grid>

          <Divider />
      <Grid sx={{ m:2,}} >
      <Typography variant="h6" component="h2" sx={{color : '#4361EE'}}>
  Pièce d'identité
</Typography>
<Grid item xs={5} sx={{ m:1,p: 2}}>
<CardMedia
        component="img"
        height="10px"
        image={user.Locataire.piece_identite}
        alt={"Piece d'identité"+user.nom+' '+user.prenom}
        sx={{height:"250px"}}
      />

</Grid>
      </Grid>
      <Divider />
      <Grid sx={{ m:2,}} ></Grid>
      <Typography variant="h6" component="h2" sx={{color : '#4361EE'}}>
 Résevations
</Typography>
<Grid/>
      </CardContent>


    </Card>
  );
}
