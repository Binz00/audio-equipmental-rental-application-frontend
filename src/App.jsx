
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'	
import './App.css'
import AdminPage from './pages/adminPage'
import HomePage from './pages/homePage' 
import Login from './pages/login'



function App() {
 

  return (
    <BrowserRouter>
    <Routes path="/*">
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/" element={<Login/>} />
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App
