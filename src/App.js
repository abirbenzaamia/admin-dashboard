
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import UserProfile from './pages/UserProfile/UserProfile'
import Locataires from './pages/UsersLists/LocatairesList/LocatairesList'
import ATCs from './pages/UsersLists/ATCsList/AtcsList'
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';


function App() {
  
  const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
     <div className="wrapper">
       {/* <Sidebar /> */}
      {/* <Login /> */}
      {/* <Login /> */}
      
    
     <BrowserRouter>

        <Routes>
        <Route path="" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={ <ThemeProvider theme={theme}>

<Login/>
  </ThemeProvider>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/locataires" element={  <ThemeProvider theme={theme}>

<Locataires/>
  </ThemeProvider>}/>
  <Route exact path="/ATCs" element={  <ThemeProvider theme={theme}>

<ATCs/>
  </ThemeProvider>}/>

        <Route exact path="/user_profil" element={  <ThemeProvider theme={theme}>

      <UserProfile/>
        </ThemeProvider>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
