import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import {getDecideurs} from '../../../modules/Users/decideurs.crud'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




const columns = [
  { field: 'id', headerName: 'ID', width: 70 },

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
      console.log(params.id),
      <Link to={`/Decideur/${params.id}`} underline="none" >
      <Button
           variant="contained"
           color="primary"
           size="small"
           style={{ marginLeft: 16 }}  
         >
           Voir profil
         </Button>
      </Link>
    ),
    sortable: false,
  },
 
];


export default function DataTable() {
  const [pageSize, setPageSize] = React.useState(5);
  const [Decideurs, setDecideurs] = useState([]);
  useEffect(() => {
    getDecideurs().then(({ data }) => {
      setDecideurs(data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={Decideurs}
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
