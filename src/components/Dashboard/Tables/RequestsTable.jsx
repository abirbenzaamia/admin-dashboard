// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { useState, useEffect }  from 'react';
import { getLocataires} from '../../../modules/Users/locataires.crud'
import RequestsActions from './RequestsActions'
import Typography from '@mui/material/Typography'


const DashboardTable = () => {
    
    const [locataires, setlocataires] = useState([])
   

    useEffect(() => {
        getLocataires().then(({ data }) => {
          setlocataires(data)
        })
        .catch(err => {
          console.log(err)
        })
      }, [])
  return (
   
    <Card sx={{margin:3 }}>
     <Typography variant='h5' sx={{margin:4,color: '#4361EE'}}>
         
          Demandes d'inscriptions récentes
        </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead  >
            <TableRow sx={{background: ' #e5e5e5' }}>
              <TableCell  ></TableCell>
              <TableCell sx={{ color : '#4361EE'}}>Nom et prénom</TableCell>
              <TableCell sx={{ color : '#4361EE'}}>Email</TableCell>
              <TableCell sx={{ color : '#4361EE'}}>N° de téléphone</TableCell>
              <TableCell sx={{ color : '#6A11CB'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locataires.map(locataire => {
              if (locataire.Statut !== null) {
                 if (locataire.Statut.val_statut ==="demandé" ) {
                  return ( <TableRow hover key={locataire.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                    {locataire.Locataire === null 
                    ? <img src="" alt="" /> 
                    :  <img className="rounded-full" src={locataire.Locataire.photo} width="40" height="40" alt={locataire.nom} />
                     }
                 
                  </TableCell>
                  <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  {locataire.nom}  {locataire.prenom}
                  </TableCell>
                  <TableCell>{locataire.email}</TableCell>
                  <TableCell>{locataire.num_tel}</TableCell>
                 {
                 }
                  <TableCell>
                    {/* <Chip
                      
                      sx={{
                        height: 24,
                        fontSize: '0.75rem',
                        textTransform: 'capitalize',
                        '& .MuiChip-label': { fontWeight: 500 }
                      }}
                    />  */}
           <RequestsActions id = {locataire.id} />
                  </TableCell>
                </TableRow>)
                 }else {
                   return( <TableRow key={locataire.id} ></TableRow> )
                 }
              }
             

            })}
         
             
        
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
    
  )
}

export default DashboardTable
