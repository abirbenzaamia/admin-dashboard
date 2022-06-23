import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import HeaderDemandes from '../../components/DemandesSupport/Header'
import { Box } from '@mui/material';
import  { useState , useEffect } from 'react';
import { getLocataires } from '../../modules/Users/locataires.crud';
const DemandesSupport = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [locataires,setLocataires] = useState();
    useEffect(() => {
      getLocataires().then(({ data }) => {
        var acceptedLocataire = [];
        data.forEach(row => {
          if (row.Statut.val_statut==="demandé") {
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
      <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <Box component="main"
      sx={{
        //flexGrow: 1,
        p:2,
        pt:3,
        m:3,
        borderRadius:0,
      }}>
        <HeaderDemandes />
        </Box>
      </main>

      </div>
      </div>
      </div>
     );
}
 
export default DemandesSupport;