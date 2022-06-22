import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar,Button,Grid } from '@mui/material';
import { Box , Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
export default function VehiclesList({vehicules}) {

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
            headerName: 'vehicule',
            width: 150,
            sortable: false,
          },
          {
            field: 'type',
            headerName: 'Type',
            width: 100,
            sortable: false,
          },
          {
            field: 'tarif',
            headerName: 'Tarif par heure',
            width: 120,
            sortable: true,
          },
          
       {
          field: 'am',
          headerName: 'Agent de maintenace',
          width: 170,
           renderCell: (params) => (
                 <IconButton href={`/am/${params.row.am}`}>
                   <Avatar  
                   style={{
                     margin: "10px",
                   }} 
                  > 
                  AM
                  </Avatar>
                 </IconButton>
           ),
          sortable: false,
        },
         {
           field: '',
           headerName: 'Action',
           width: 300,
           renderCell :(params) => (
            <Grid container spacing={0} rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                 <Grid item xs={6} sx={{pl:0}}>
                 <Button variant="outlined" color="info">Modifier</Button>
                 </Grid>
                 <Grid item xs={6} x={{pl:0}}>
                 <Button variant="outlined" color="warning">Supprimer</Button>
                 </Grid>
               </Grid>            //  <Grid>
            //  <Button variant="outlined" color="primary">Modifier</Button>
            //  <Button variant="outlined" color="danger">Supprimer</Button>
            //  </Grid>
        
           ),
            sortable: false,
         }

       
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
            
            Vehicules non loués ({vehicules.length}) </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Container maxWidth={false}>
        
        <Box sx={{ mt: 3 }}>
        <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={vehicules}
      // getRowId={(row) => row.idVehicule}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      pagination
    />
  </div>
        </Box>
      </Container>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
