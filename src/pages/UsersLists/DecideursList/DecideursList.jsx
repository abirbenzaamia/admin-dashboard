import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/Header/Header';
import DecideursList from '../../../components/Users/Decideurs/DecideursList'
import React, { useState } from 'react';
import DecideursListToolbar from '../../../components/Users/Decideurs/DecideursListToolbar'
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
        <DecideursListToolbar />
        <Box sx={{ mt: 3 }}>
          <DecideursList />
        </Box>
      </Container>
    </Box>
            
  
      </main>

      </div>

     );
}
 
export default Dashboard;