import './styles/Sidebar.css'
import React from 'react';
import { IconName } from "react-icons/fa";
import { LineStyle } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useState from 'react-hook-use-state';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import photo from './images/photo.jpg';
import MenuItem from './MenuItem';
import { menuItemUnstyledClasses } from '@mui/base';


const menuItems = [
    {name:"Home" , to: "/",iconClassName: <HomeIcon/>  },
    {name:"Dashboard" , to: "/",iconClassName:<DashboardIcon/> },
    {
        name: "Projects",
        to: "/projects", 
        

        subMenus: [{ name: "Project Suggestion"},{name: "Project Approve"},{name: "Project Supervision"}],
     },
      {name: "Meetings", to: "/ meetings",iconClassName: <GroupsIcon/>},
      {name: "Contracts", to: "/ contracts",iconClassName:<DashboardIcon/>},
      {name: "Finished Projects", to: "/ Finished Projects",iconClassName:<CheckCircleOutlineIcon/>}
    ];

const Sidebar = (props) => {
        const [inactive, setInactive] = useState(false);
    

   
       return (
        
               
                <div className={'side-menu ${inactive ? "inactive":""}'}>                   
                    <div className='top-section'>
                <div className='top-top-section'>
                <div onClick={() => {
                   
                    setInactive(!inactive);

                }}
                

                className='back'>
                     
            <ArrowBackIcon/>
            </div>
                        <div className='user'>
                        
            <img src={photo}></img>
            
            </div>
            <div className="user-name">
                K.N.Kumararatne
            </div>

            </div>
    
      

            <div className='main-menu'>
                <ul>
                    {menuItems.map((menuItem,index) => (
                        <MenuItem
                        key ={index}
                        name={menuItem.name}
                        to={menuItem.to}
                        subMenus={menuItem.subMenus || []}
                        iconClassName={menuItem.iconClassName}
                        onClick={() => {
                            if(inactive) {
                                setInactive(false);
                            }
                        }}
                       
                       />
                        ))}

                    {/*<li>
                        <a className='menu-item'>
                            <div className="menu-icon">
                            <HomeIcon/> 
                            </div>
                                
                                Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>
                            <div className="menu-icon">
                            <DashboardIcon/>
                            </div>
                                
                                Dashboard</a>
                    </li>
                    <MenuItem
                    name={"Projects"}
                    subMenus={[{name: "Project Suggestion"}, {name: "Project Approve"}, {name: "Project Supervision"}]}/>
                  
                    <li>
                        <a className='menu-item'>
                            <div className="menu-icon">
                           <GroupsIcon/>
                            </div>
                                
                            Meetings</a>
                    </li>
                    <li>
                        <a className='menu-item'>
                            <div className="menu-icon">
                            <DashboardIcon/>
                            </div>
                                
                                Contracts</a>
                    </li>
                    <li>
                        <a className='menu-item'>
                            <div className="menu-icon">
                            <CheckCircleOutlineIcon/>
                            </div>
                                
                                Finished Projects</a>
                    </li>*/}
                    </ul>
            </div>

            
           
                                                

                    </div>
                </div>
                
                
  
       );
            }
        

export default Sidebar;


