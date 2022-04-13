import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import {getLocataires} from '../../../modules/Users/locataires.crud'
import Button from '@mui/material/Button';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'Locataire',
    headerName: 'Photo',
    width: 130,
    renderCell: (params) => (
 
      <img className="rounded-full" src={params.value.photo} width="40" height="40" alt={params.row.nom} />

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
    renderCell: () => (
      <strong>
       
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Voir profil
        </Button>
      </strong>
    ),
    sortable: false,
  },
 
];


export default function DataTable() {
  const [locataires, setLocataires] = useState([]);
  useEffect(() => {
    getLocataires().then(({ data }) => {
      setLocataires(data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={locataires}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 25]}
        checkboxSelection
      />
    </div>
  );
}
