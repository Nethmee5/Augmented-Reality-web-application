import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';

import Home from './components/Home';
import Navbar from './components/Navbar';


import LoginForm from './components/LoginForm';
import Register from './components/Register';
import TopDashBar from './components/TopDashBar';

import Dashboard from './components/Dashboard';
import Chatbox from './components/Chatbox';
import ApproveProposals from './components/ApproveProposals';
import RightNav from './components/RightNav';
import Contracts from './components/Contracts';
import FinishedProjects from './components/FinishedProjects';
import RighthandSearch from './components/RighthandSearch';
import ProjectSuggestion from './components/ProjectSuggestion';

import ImageUpload from './components/ImageUpload';







ReactDOM.render(
 

  
  <Router>
    
    

    
   
    <Navbar/>

  
    
   
    <Routes>
      <Route path ='/'element={<Home/>} />
      <Route path ='/Home' element={<Home/>} />
     

      <Route path ='/Aboutus' element={<Aboutus/>} />
      <Route path ='/Contactus' element={<Contactus/>} />
      <Route path ='/Login' element={<LoginForm/>} />
      <Route path ='/Register' element={<Register/>} />
      <Route path ='/Dashboard' element={<Dashboard/>} />
      <Route path ='/Chatbox' element={<Chatbox/>} />
      <Route path ='/ApproveProposals' element={<ApproveProposals/>} />
      <Route path ='/RightNav' element={<RightNav/>} />
      <Route path ='/Contracts' element={<Contracts/>} />
      <Route path ='/FinishedProjects' element={<FinishedProjects/>} /> 
      <Route path ='/RighthandSearch' element={<RighthandSearch/>} />
      <Route path ='/ProjectSuggestion' element={<ProjectSuggestion/>} />
      <Route path ='/ImageUpload' element={<ImageUpload/>} />
      
     





   
    </Routes>

    
    <Contactus />
    
    
    

  </Router>,
  

  document.getElementById('root')
  

);
