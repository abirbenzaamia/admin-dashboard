
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
