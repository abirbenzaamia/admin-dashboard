import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/Header/Header';
import AMsList from '../../../components/Users/AMs/AMsList'
import React, { useState } from 'react';
import AMsListToolbar from '../../../components/Users/AMs/AMsListToolbar'
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
      <main>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <AMsListToolbar />
        <Box sx={{ mt: 3 }}>
          <AMsList />
        </Box>
      </Container>
    </Box>
            
  
      </main>

      </div>
    </div>
     );
}
 
export default Dashboard;