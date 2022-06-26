import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/Header/Header';
import AMsList from '../../../components/Users/AMs/AMsList'
import React, { useState,useEffect } from 'react';
import AMsListToolbar from '../../../components/Users/AMs/AMsListToolbar'
import TotalPannes from '../../../components/Charts/Pannes/TotalPannes';
import { 
  getAllPannes,
  getDonePannes ,
  getAllPannesPerMonth,
  getDonePannesPerMonth,
  getOngoingPannesPerMonth
 } from '../../../modules/Pannes/panne.crud';
import TotalPannesPerMonth from '../../../components/Charts/Pannes/TotalPannesPerMonth';
import {
  Box,
Container,
Grid,Typography
} from '@mui/material';
const Dashboard = () => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [totalPannes,setTotalPannes] = useState();
    const [totalDonePannes, setTotalDonePannes] = useState();
    const [totalOngoingPannes, setTotalOngoingPannes] = useState();
    const [grapheAll,setGrapheAll] = useState();
    const [grapheDone,setGrapheDone] = useState();
    const [grapheOngoing,setGrapheOngoing] = useState();
    
    useEffect (()=>{
      const getNb = async ()=>{
        const response1 = await getAllPannes();
        setTotalPannes(response1.data.length);
        const response2 = await getDonePannes()
        setTotalDonePannes(response2.length);
        //const response3 = totalPannes - totalDonePannes;
        setTotalOngoingPannes(totalPannes - totalDonePannes);
        const responseGraphe1 = await getAllPannesPerMonth();
        setGrapheAll(responseGraphe1);
        const responseGraphe2 = await getDonePannesPerMonth();
        setGrapheDone(responseGraphe2);
        const reponseGraphe3 = await getOngoingPannesPerMonth();
        setGrapheOngoing(reponseGraphe3);

      }
      getNb()
      .catch(console.error);
    })
    
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
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: 3,
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Statistiques
      </Typography>
      </Box>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 1,
        m:3,
        ml:10,
        mr:10
      }}
    >
     <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <TotalPannes title="Pannes" total={totalPannes} color="info" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TotalPannes title="Pannes réparées" total={totalDonePannes} color="success" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TotalPannes title="Pannes en attente" total={totalOngoingPannes} color="warning" />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <TotalPannesPerMonth
              title="Nombre de pannes par mois"
              subheader="Année 2022"
              chartLabels={[
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
                '12/01/2022'
              ]}
              chartData={[
                {
                  name: 'Pannes réparées',
                  type: 'area',
                  fill: 'gradient',
                  data: grapheDone,
                },
                {
                  name: 'Pannes en attente',
                  type: 'area',
                  fill: 'gradient',
                  data: grapheOngoing,
                },
                {
                  name: 'Pannes',
                  type: 'area',
                  fill: 'gradient',
                  data: grapheAll,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Box>
     
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
      </div>
     );
}
 
export default Dashboard;