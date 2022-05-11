import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import React, { useState , useEffect } from 'react';
import DecideurProfileDetails from "../../components/Profiles/Decideurs/DecideurProfileDetails";
import DecideurProfile from '../../components/Profiles/Decideurs/DecideurProfile'
import {getDecideurInfo} from '../../modules/Users/decideurs.crud'

import {
  Box,
  Container,
  Typography,
  Grid
} from '@mui/material';
import { useParams } from 'react-router-dom';
const UserProfil = (props) => {
  const {id} = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    getDecideurInfo(id).then(({ data }) => {
      setUser(data.user);
      console.log(data.user);

    })
    .catch(err => {
      console.log(err)
    })
  }, [id])
    const [sidebarOpen, setSidebarOpen] = useState(true);
    
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
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
        Profil
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            {user && <DecideurProfile user={user}  />}
 
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
             {user && <DecideurProfileDetails user={user} />}
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  
      </main>

      </div>
    </div>
     );
}
 
export default UserProfil;