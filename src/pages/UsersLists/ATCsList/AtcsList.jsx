import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/Header/Header';
import ATCsList from '../../../components/Users/ATCs/ATCsList'
import React, { useState } from 'react';
import ATCsListToolbar from '../../../components/Users/ATCs/ATCsListToolbar'
import {
  Box,
Container
} from '@mui/material';
const Dashboard = () => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return ( 
       
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
        <ATCsListToolbar />
        <Box sx={{ mt: 3 }}>
          <ATCsList />
        </Box>
      </Container>
    </Box>
            
  
      </main>

      </div>
     );
}
 
export default Dashboard;