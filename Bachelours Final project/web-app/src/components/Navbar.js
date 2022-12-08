import React, {useState} from 'react';
import  { Link } from 'react-router-dom';
import './styles/Navbar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import irrlogo from '../components/images/irr logo.jpg';
import './styles/topbar.css';


const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar);

    return(

    
            <div className='sum'>
                <IconContext.Provider value={{color:'black'}}>
              
                <div className='side-drawer'>
                         
       

                   <Link to="#" className='menu-bars-icon'>
                   <MenuIcon onClick={showSidebar}/>

                       </Link> 
                       <li id='Logo-img'>

                            <img src ={irrlogo}/>


                        </li>
                        <li id="name">
                             Irrigation Department <br></br>
                             Sri Lanka 
                            
                             </li>
                    
                       </div>
                       <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                       <ul className='nav-menu-items'>
                           <li className="navbar-toggle">
                               
                               <Link to ="#" className='menu-bars'>
                                   
                               <ArrowCircleLeftIcon onClick={showSidebar}/>
                               </Link>
                           </li>
                           {SidebarData.map((item,index) =>{
                               return(
                                   <li key={index} className={item.cName}>
                                       <Link to={item.path}>
                                           {item.icon}
                                           <span>{item.title}</span>
                    

                                       </Link>
                                   </li>
                               )
                           } )}
                       </ul>
                       </nav>
                       </IconContext.Provider>
                      
  





                 <div className="navbar">
                     
                     </div>
                    

                     
                 
                 
						
							
        
        <nav>
            <ul className="ul">


                
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Aboutus'>About us</Link>
                </li>
                <li>
                    <Link to='/Contactus'>Contact us</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
            </ul>
      </nav>
      </div>
      
      
     

    );
    

       

}


export default Navbar;