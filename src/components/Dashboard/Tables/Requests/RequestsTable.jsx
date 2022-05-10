// ** MUI Imports
import { useState, useEffect }  from 'react';
import { getLocataires} from '../../../../modules/Users/locataires.crud'
import RequestsActions from './RequestsActions'
import Avatar from '@mui/material/Avatar';
import { DataGrid } from '@mui/x-data-grid';
import {
  Box,
Container
} from '@mui/material';
const DashboardTable = ({locatairesList}) => {
    
    const [locataires, setLocataires] = useState(locatairesList)
    const [pageSize, setPageSize] = useState(5);
      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
          field: 'image',
          headerName: 'Photo',
          width: 150,
          renderCell: (params) => (
             params.row.Locataire === null 
               ? <img src="" alt="" /> 
               :<Avatar alt={params.row.nom} src={params.row.Locataire.photo}/>
               
          ),
          sortable: false,
        },
        { field: 'nom', headerName: 'Nom', width: 130 },
        { field: 'prenom', headerName: 'Prénom', width: 130 },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          sortable: false,
        },
        {
          field: 'num_tel',
          headerName: 'N° téléphone',
          type: 'number',
          width: 130,
          sortable: false,
        },
        {
          field: '',
          headerName: 'Actions',
          width: 150,
          renderCell: (params) => (
            <RequestsActions user={params.row}/>
               
          ),
          sortable: false,
        },
       
      ];
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        
        <Box sx={{ mt: 3 }}>
        <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={locataires}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      pagination
      checkboxSelection
    />
  </div>
        </Box>
      </Container>
    </Box>
    
    
  )
}

export default DashboardTable
