import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Box , Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import lockIncon from '../../assets/icons/lock.svg'
import unlockIncon from '../../assets/icons/unlock.svg'
import FaceIcon from '@mui/icons-material/Face';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GridRowParams } from '@mui/x-data-grid';

export default function ActiveReservationsList({vehicules,handleClickShowActiveReservationDetails}) {

    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const [pageSize, setPageSize] = useState(5);

      const columns = [
          
        {
            field: 'matricule',
            headerName: 'Matricule',
            width: 120,
            sortable: false,
          },
          {
            field: 'vehicule',
            headerName: 'Vehicule',
            width: 150,
            sortable: false,
          },
        
        { field: 'depart', headerName: 'Départ', width: 200 , sortable: false,},
        { field: 'arrivee', headerName: 'Arrivée', width: 200 , sortable: false,},
       {
          field: 'locataire',
          headerName: 'Locataire',
          width: 120,
           renderCell: (params) => (
                <IconButton href={`/locataire/${params.row.id_locataire}`}>
                 <Avatar 
                  src={params.row.locataire} 
                  style={{
                    margin: "10px",
                  }} 
                 />
                </IconButton>
           ),
          sortable: false,
        },
        { field: 'etat', headerName: 'État', width: 130,
        renderCell: (params) => (
         params.etat === true
         ? <Chip icon={<LockOutlinedIcon />} label="verrouillee" color="success" variant="outlined" />
         : <Chip icon={<LockOpenOutlinedIcon/>} label="déverouillee" color="error" variant="outlined" />

       ), 
       sortable: false, },

       
      ];
  return (
    <div>
      <Accordion  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            
            Réservations actives ({vehicules.length}) </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Container maxWidth={false}>
        
        <Box sx={{ mt: 3 }}>
        <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={vehicules}
      //getRowId={(row) => row.idLocation}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      pagination
      onRowClick={(GridRowId)=>{
console.log(GridRowId.id);
handleClickShowActiveReservationDetails(GridRowId.id);
      }}
    />
  </div>
        </Box>
      </Container>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
