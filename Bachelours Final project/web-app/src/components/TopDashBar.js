import React  from "react";
import './styles/TopDashBar.css'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

export default function TopDashBar(){
    return(
        <div className="top-dash-bar">
           <div className="top-dash-bar-wrapper">
           <div className="topleft">
 
           </div>
        <div className="topright">
            <div className="topbariconcontainer">
            <ChatBubbleIcon/>
            <span className="topiconBadge">2</span>
            </div>
            <div className="topbariconcontainer">
            <NotificationsIcon/>
            <span className="topiconBadge">2</span>
            </div>
            <div className="topbariconcontainer">
            <PersonIcon/>
            
            </div>
            <div className="topbariconcontainer">
            <div id="Logged-user-name">K.K.Udayasiri</div>
            
            </div>
            


        </div>

        </div>
      </div>
    );
}