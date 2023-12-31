import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/Header/Header';
import LocatairesList from '../../../components/Users/Locataires/LocatairesList'
import React, { useState } from 'react';
import LocatairesListToolbar from '../../../components/Users/Locataires/LocatairesListToolbar';
import {
  Box,
Container
} from '@mui/material';
const Dashboard = () => {
    
  const [sidebarOpen, setSidebarOpen] = useState(false);

    return ( 
     
      <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <LocatairesListToolbar />
        <Box sx={{ mt: 3 }}>
          <LocatairesList  />
        </Box>
      </Container>
    </Box>
            
  
      </main>

      </div>
      </div></div>
     );
}
 
export default Dashboard;