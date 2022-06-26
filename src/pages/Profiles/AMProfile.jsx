import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import  { useState , useEffect } from 'react';
import AMProfileDetails from "../../components/Profiles/AMs/AMProfileDetails";
import AMProfile from '../../components/Profiles/AMs/AMProfile'
import {getAMInfo} from '../../modules/Users/ams.crud'
import TotalPannes from '../../components/Charts/Pannes/TotalPannes';
import { 
  getAllPannes,
  getDonePannes ,
  getAllPannesPerMonthParAm,
  getDonePannesPerMonthParAm,
  getOngoingPannesPerMonthParAm,
  getAllPannesPerWeekParAm,
  getDonePannesPerWeekParAm,
  getOngoingPannesPerWeekParAm
 } from '../../modules/Pannes/panne.crud';
import TotalPannesPerMonth from '../../components/Charts/Pannes/TotalPannesPerMonth';
import {
  Box,
  Container,
  Typography,
  Grid
} from '@mui/material';
import { useParams } from 'react-router-dom';
const UserProfil = (props) => {

  const [totalPannes,setTotalPannes] = useState();
  const [totalDonePannes, setTotalDonePannes] = useState();
  const [totalOngoingPannes, setTotalOngoingPannes] = useState();
  const [grapheAll,setGrapheAll] = useState();
  const [grapheDone,setGrapheDone] = useState();
  const [grapheOngoing,setGrapheOngoing] = useState();
  const [dataPerWeekTotal, setDataPerWeekTotal] = useState();
    const [dataPerWeekDone, setDataPerWeekDone] = useState();
    const [dataPerWeekOngoing, setDataPerWeekOngoing] = useState();
  const semaine = new Array(52);
  for (let i = 0; i < semaine.length; i++) {
    semaine[i]= (i+1).toString();
    
  }
  const {id} = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    getAMInfo(id).then(({ data }) => {
      setUser(data.user);
      console.log(data.user);

    })
    .catch(err => {
      console.log(err)
    })
  }, [id])
  useEffect (()=>{
    const getNb = async ()=>{
      const response1 = await getAllPannes();
      setTotalPannes(response1.data.length);
      const response2 = await getDonePannes()
      setTotalDonePannes(response2.length);
      //const response3 = totalPannes - totalDonePannes;
      setTotalOngoingPannes(totalPannes - totalDonePannes);
      const responseGraphe1 = await getAllPannesPerMonthParAm(id);
      setGrapheAll(responseGraphe1);
      const responseGraphe2 = await getDonePannesPerMonthParAm(id);
      setGrapheDone(responseGraphe2);
      const reponseGraphe3 = await getOngoingPannesPerMonthParAm(id);
      setGrapheOngoing(reponseGraphe3);
      const reponseGrapheWeek1 = await getAllPannesPerWeekParAm(id);
        setDataPerWeekTotal(reponseGrapheWeek1);
        const reponseGrapheWeek2 = await getDonePannesPerWeekParAm(id);
        setDataPerWeekDone(reponseGrapheWeek2);
        const reponseGrapheWeek3 = await  getOngoingPannesPerWeekParAm(id);
        setDataPerWeekOngoing(reponseGrapheWeek3);


    }
    getNb()
    .catch(console.error);
  },[id, totalDonePannes, totalPannes])
    const [sidebarOpen, setSidebarOpen] = useState(true);
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
            {user && <AMProfile user={user}  />} 
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            {user && <AMProfileDetails user={user} />}
          </Grid>
        </Grid>
      </Container>
    </Box>
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
          <Grid item xs={12} md={6} lg={12}>
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
           {/* Stastics per week */}
           <Grid item xs={12} md={6} lg={12}>
          <TotalPannesPerMonth
              title="Nombre de pannes par semaine"
              subheader="Année 2022"
              chartLabels={semaine}
              chartData={[
                {
                  name: 'Pannes réparées',
                  type: 'area',
                  fill: 'gradient',
                  data: dataPerWeekDone,
                },
                {
                  name: 'Pannes en attente',
                  type: 'area',
                  fill: 'gradient',
                  data: dataPerWeekOngoing,
                },
                {
                  name: 'Pannes',
                  type: 'area',
                  fill: 'gradient',
                  // data: dataPerWeek,
                 // data : dataPerWeekTotal.subarray((page-1)*4,(page-1)*4+3),
                 data: dataPerWeekTotal,
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
 
export default UserProfil;