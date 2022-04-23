import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import React, { useState } from 'react';
import UserProfileDetails from "../../components/Profiles/Locataires/UserProfileDetails";
import UserProfile from '../../components/Profiles/Locataires/UserProfile';
import {useEffect } from 'react';
import {getLocataireInfo} from '../../modules/Users/locataires.crud'

import {
  Box,
  Container,
  Typography,
  Grid
} from '@mui/material';
import { useParams } from 'react-router-dom';
const UserProfil = (props) => {
  const [user, setUser] = useState([]);
   const {id} = useParams();
  console.log(props.id);
  useEffect(() => {
    getLocataireInfo(props.id).then(({ data }) => {
      setUser(data.user);
      console.log(data.user);
    })
    .catch(err => {
      console.log(err)
    })
  }, [props.id])
  console.log(user);

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
            <UserProfile id={id} /> 
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <UserProfileDetails id={id} />
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