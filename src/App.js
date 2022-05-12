
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import LocataireProfile from './pages/Profiles/LocataireProfile'
import Locataires from './pages/UsersLists/LocatairesList/LocatairesList'
import ATCs from './pages/UsersLists/ATCsList/AtcsList'
import AMs from './pages/UsersLists/AMsList/AmsList'
import Decideurs from './pages/UsersLists/DecideursList/DecideursList'
import ATCProfile from './pages/Profiles/ATCProfile'
import AMProfile from './pages/Profiles/AMProfile'
import DecideurProfile from './pages/Profiles/DecideurProfile'
import MyAccount from './pages/MyAccount/MyAccount'
import LocationsList from './pages/Locations/LocationsList'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';


function App() {
  
  const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
   
  const [connected, setConnected] = useState( localStorage.getItem("connected"));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  if (connected === 'true'){
    return (
      <div className="wrapper">
      
      <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
     {/* Sidebar */}
     <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 
     {/* Content area */}
     <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
     <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
     <main>
    
     <Routes>
           {
          connected === 'true'
          ? <Route path="" element={<Navigate to="/dashboard" />} />
          : <Route path="" element={<Navigate to="/login" />} />
           }
        
         <Route exact path="/login" element={ <ThemeProvider theme={theme}>
            <Login/> </ThemeProvider>} />
         <Route exact path="/dashboard"  element={  <ThemeProvider theme={theme}>
            <Dashboard/> </ThemeProvider>} />
         <Route exact path="/locataires" element={  <ThemeProvider theme={theme}>
            <Locataires/> </ThemeProvider>}/>
         <Route exact path="/ATCs" element={  <ThemeProvider theme={theme}>
           <ATCs/> </ThemeProvider>}/>
         <Route exact path="/AMs" element={  <ThemeProvider theme={theme}>
           <AMs/> </ThemeProvider>}/>
         <Route exact path="/locataire/:id" element={  <ThemeProvider theme={theme}>
           <LocataireProfile/> </ThemeProvider>} />
         <Route exact path="/atc/:id" element={  <ThemeProvider theme={theme}>
           <ATCProfile/> </ThemeProvider>} />
         <Route exact path="/am/:id" element={  <ThemeProvider theme={theme}>
           <AMProfile/> </ThemeProvider>} />
         <Route exact path="/mon_compte" element={  <ThemeProvider theme={theme}>
           <MyAccount/> </ThemeProvider>} />
           <Route exact path="/Decideurs" element={  <ThemeProvider theme={theme}>
           <Decideurs/> </ThemeProvider>}/>
           <Route exact path="/decideur/:id" element={  <ThemeProvider theme={theme}>
           <DecideurProfile/> </ThemeProvider>} />
           <Route exact path="/reservations" element={  <ThemeProvider theme={theme}>
           <LocationsList/> </ThemeProvider>} />
         </Routes>
     </main>
 
     </div>
   </div>
        
       </BrowserRouter> 
     </div>
   );
  }else{
<div className="wrapper">
  
</div>
  }
  
}

export default App;
