import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import React, { useState } from 'react';
import UserProfileDetails from "../../components/Profiles/Locataires/UserProfileDetails";
import UserProfile from '../../components/Profiles/Locataires/UserProfile';
import LocataireProfileAll from '../../components/Profiles/Locataires/LocataireProfileAll';
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

    const {id} = useParams();
    const [user, setUser] = useState();
    useEffect(() => {
      getLocataireInfo(id).then(({ data }) => {
        setUser(data.user);
        console.log(data.user);
  
      })
      .catch(err => {
        console.log(err)
      })
    }, [id])
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
        <Container maxWidth="lg">
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
          Profil
          </Typography>
          {user && <LocataireProfileAll user={user}/>}
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

   
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
               
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    
        </main>
  
        </div>
     );
}
 
export default UserProfil;