import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import {getLocataires} from '../../../modules/Users/locataires.crud'
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'Locataire',
    headerName: 'Photo',
    width: 130,
    renderCell: (params) => (
      
   
      <Avatar src={params.value.photo} width="40" height="40" alt={params.row.nom} />

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
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      console.log(params.id),

<Link to={`/locataire/${params.id}`} underline="none" >
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
  const [locataires, setLocataires] = useState([]);
  useEffect(() => {
    getLocataires().then(({ data }) => {
      var acceptedLocataire = [];
      data.forEach(row => {
        if (row.Statut.val_statut==="accepté") {
          acceptedLocataire.push(row);
        }
      });
      setLocataires( acceptedLocataire);
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
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        checkboxSelection
      />
    </div>
  );
}
