import React from "react";
import './styles/Dashboard.css'
import TopDashBar from "./TopDashBar";
import GroupsIcon from '@mui/icons-material/Groups';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AssignmentIcon from '@mui/icons-material/Assignment';
import  { Link } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Dashboard = () => {


    return(

<div className="top-bar">
    <TopDashBar/>

   <div className="dash-items">
       <table>
           <tr>
               <td>
        <div className="box1">

        <div className="icon">
            
            <GroupsIcon/>
            </div>
 
<Link to="/Chatbox" className="box-name">Supervisions</Link>
            
            </div>
     
        
        
        
            </td>
            <td>
            <div className="box2">
            <div className="icon">
               <PlaylistAddCheckIcon/>
         
           </div>
           
         <Link to="/ApproveProposals" className="box-name">Approve proposals</Link>
                 
                   </div>
              
    
   
               
               
               </td>



               
               </tr>
   
      
            <tr>
               <td>
        <div className="box3">
        <div className="icon">
        <AssignmentIcon/>
      
        </div>
        
      <Link to="/ApproveProposals"className="box-name">Approve Estimates</Link>
            </div>
     
        
            </td>
            <td>
        <div className="box4">
        <div className="icon">
        <LightbulbIcon/>
        </div>
        
   <Link to="/ProjectSuggestion" className="box-name">Project Suggestion</Link>
            </div>
    

            </td>
            </tr>

            
          
 

            </table>
            </div>
            


        </div>

        
        




    )
}

export default Dashboard;