import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/Header/Header';
import WelcomeBanner from '../../../components/Dashboard/WelcomeBanner';
import RequestsTable from '../../../components/Dashboard/Tables/Requests/RequestsTable'
import Map from '../../../components/Dashboard/Map/Map'

//mui
import { Grid , Box } from '@mui/material';
import  { useState , useEffect } from 'react';
import { getLocataires } from '../../../modules/Users/locataires.crud';
import { getNbAccepted, 
  getNbRefused,
  getNbInDemand,
  getNbAcceptedPerMonth,
  getNbRefusedPerMonth,
  getNbAcceptedPerWeek,
  getNbRefusedPerWeek } from '../../../modules/Users/locataires.crud';
import TotalDemandes from '../../../components/Charts/Demandes/TotalDemandes';
//charts
import TotalDemandesPerMonth from '../../../components/Charts/Demandes/TotalDemandesPerMonth';
const DashboardDecideur = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [locataires,setLocataires] = useState();
    /* --------------------------------- */
    //statistics
    const [nbAccepted, setNbAccepted] = useState();
    const [nbRefused, setNbRefused] = useState();
    const [nbInDemand, setNbInDemand] = useState();
    const [nbAcceptedPerMonth,setNbAcceptedPerMonth] = useState();
    const [nbRefusedPerMonth,setNbRefusedPerMonth] = useState();
    const [nbAcceptedPerWeek,setNbAcceptedPerWeek] = useState();
    const [nbRefusedPerWeek,setNbRefusedPerWeek] = useState();
    const semaine = new Array(52);
    for (let i = 0; i < semaine.length; i++) {
      semaine[i]= (i+1).toString();
      
    }
    //let nbAccepted;
    //let nbRefused;
    //let nbInDemand;
    //getStatistics 
    useEffect(() => {
      const getStatistics = async ()=>{
       const r1 = await getNbAccepted();
       //setNbAccepted(r1)
       setNbAccepted(r1);
       console.log(nbAccepted);
       const r2 = await getNbRefused();
       setNbRefused(r2);
       console.log(nbRefused);
       const r3 = await getNbInDemand();
       setNbInDemand(r3);
       console.log(nbInDemand);
       const r4 = await getNbAcceptedPerMonth();
       setNbAcceptedPerMonth(r4);
       console.log(r4);
       const r5 = await getNbRefusedPerMonth();
       setNbRefusedPerMonth(r5);
       console.log(r4);
       const r6 = await getNbAcceptedPerWeek();
       setNbAcceptedPerWeek(r6);
       const r7 = await getNbRefusedPerWeek();
       setNbRefusedPerWeek(r7);
       console.log(r7);


      }
      getStatistics().catch(console.error);
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner />
            </div>
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
            <TotalDemandes title="Demandes acceptées" total={nbAccepted} color="success" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TotalDemandes title="Demandes refusées" total={nbRefused} color="warning" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TotalDemandes title="demandes en attente" total={nbInDemand} color="info" />
          </Grid>
          {/* Statistics per month */}
          <Grid item xs={12} md={6} lg={12}>
            <TotalDemandesPerMonth
              title="Nombre de demandes acceptées par mois"
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
                  name: 'demandes acceptées',
                  type: 'area',
                  fill: 'gradient',
                  data: nbAcceptedPerMonth,
                },
                {
                  name: 'demandes refusées',
                  type: 'line',
                  fill: 'solid',
                  data: nbRefusedPerMonth,
                },
                
              ]}
            />
          </Grid>
          {/* Statistics per semaines */}
          <Grid item xs={12} md={6} lg={12}>
          <TotalDemandesPerMonth
              title="Nombre de pannes par semaine"
              subheader="Année 2022"
              chartLabels={semaine}
              chartData={[
                {
                  name: 'demandes acceptées',
                  type: 'area',
                  fill: 'gradient',
                  data: nbAcceptedPerWeek,
                },
                {
                  name: 'demandes refusées',
                  type: 'line',
                  fill: 'solid',
                  data: nbRefusedPerWeek,
                },
                
              ]}
            />
        

          </Grid>
          </Grid>
    </Box>
      </main>

      </div>
      </div>
      </div>
     );
}
 
export default DashboardDecideur;