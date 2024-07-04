



// import RegisterPage from './Components/Register/Register';
// import TicketPage from './Components/TicketPage/TicketPage';
// import ClientRegister from './Components/ClientRegister/ClientRegister';



import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Login from './Components/Login/Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import ClientRegister from './Components/ClientRegister/ClientRegister';
import TicketPage from './Components/TicketPage/TicketPage';
import Ticketstatus from './Components/TicketStatus/Ticketstatus';
import Dashboard from './Components/Dashboard/Dashboard';

import ClientDashboard from './Components/ClientDashboard/ClientDashboard';
import Services from './Components/ClientRegister/Services';



function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route path="/clientregister" element={<ClientRegister/>}/>
       <Route path="/ticket" element={<TicketPage/>}/>
       <Route path='/status' element={<Ticketstatus/>}/>

       <Route path='/memberdashboard/:id' element={<Dashboard/>}/>
       <Route path='/clientdashboard/:id' element={<ClientDashboard/>}/>
       
       <Route path='/clientservices/:id' element={<Services/>}/>
      </Routes> 

  );
}

export default App;
