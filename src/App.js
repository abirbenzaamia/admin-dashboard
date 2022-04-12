
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import UserProfil from './pages/UserProfil/UserProfil'

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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/user_profil" element={<UserProfil/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
