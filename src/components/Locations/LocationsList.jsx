import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




const columns = [
  { field: 'idLocation', headerName: 'ID', width: 70 },

  { field: 'dateLocation', headerName: 'Date', width: 130 },
  { field: 'prenom', headerName: 'Prénom', width: 130 },
//   {
//     field: 'terminee',
//     headerName: 'Email',
//     width: 200,
//     sortable: false,
//   },
//   {
//     field: 'locataire',
//     headerName: 'N° téléphone',
//     type: 'number',
//     width: 130,
//     sortable: false,
//   },
//   {
//     field: '',
//     headerName: 'Actions',
//     width: 150,
//     renderCell: (params) => (
//       <Link to={`/am/${params.id}`} underline="none" >
//       <Button
//            variant="contained"
//            color="primary"
//            size="small"
//            style={{ marginLeft: 16 }}  
//          >
//            Voir profil
//          </Button>
//       </Link>
//     ),
//     sortable: false,
//   },
 
];


export default function DataTable({locations}) {
  const [pageSize, setPageSize] = React.useState(5);
 console.log(locations)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={locations}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        checkboxSelection
      />
    </div>
  );
}
