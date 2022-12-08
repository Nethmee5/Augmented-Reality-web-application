import React from 'react';
import Aboutus from './Aboutus';
import Navbar from './Navbar';
import './styles/Home.css';
import  { Link } from 'react-router-dom';



const Home = () => {
    return (
        
       <div className='header'> 
     	
							
        <table>
          <tr>
            <td className="header-txt">


       
		 
  <div id="sen-1">Welcome To The Western Province </div>
   
  <div id="sen-2">Irrigation Department </div>

  <div id="sen-3">Office Managment System</div>
   
   </td>
 
  
               <td>
                 <tr>
                           <div className="rounded-box1">
 
<div className="name1">
        
<Link to="/ImageUpload"><div className="name1">Register</div></Link>
</div>
      
          </div>
            
               </tr>
       
        
           
           <tr>
            <div className="rounded-box2">
           
            <Link to="/Contracts"> <div className="name2">Apply for a contract </div></Link>
          </div>
           
          
                 
      </tr>
      <tr>
            <div className="rounded-box3">
           
            <Link to="/FinishedProjects"> <div className="name3"> Explore finished projects </div> </Link>
          </div>
           
          
                  
      </tr>
               
               
               </td>



               
               </tr>
               
               </table>
               <div className="home-footer">
                Project management, Sharing and Communication together with<br></br>
                Making the path to connect public people and office staff <br></br>
                from the services provides by one centered platform..
                 </div>

</div>

            
 





     
     
    
    
     
    );
    

       
}

export default Home;