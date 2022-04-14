import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import {getATCs} from '../../../modules/Users/atcs.crud'
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
      <Link to={`/atc/${params.id}`} underline="none" >
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
  const [atcs, setAtcs] = useState([]);
  useEffect(() => {
    getATCs().then(({ data }) => {
      setAtcs(data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={atcs}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 25]}
        checkboxSelection
      />
    </div>
  );
}
