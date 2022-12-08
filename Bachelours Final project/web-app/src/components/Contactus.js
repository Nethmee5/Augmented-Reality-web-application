import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import React from "react";
import Navbar from "./Navbar";
import './styles/Contactus.css'
import Topbar from "./topbar";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { FaFacebook} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





const Contactus= () => {
    return(
       
        <div className="footer">
        <div className="row">
          
            <div className="col">

                <div className="left">
                    <h1>Departments</h1>
                   <ul>
                       <li id="footer-li">Provincial Irrigation Department Head Office(Western Province)</li>
                       <li id="footer-li">District irrigation Office</li>
                       <li id="footer-li">Divisional irrigation Office</li>
                       <li id="footer-li">Department of Agriculture</li>
                       <li id="footer-li">Divisional Secretary Office</li>
                   </ul>
                </div>
                   
                      
            </div>
                
           

            <div className="col">
                <div className="middle">
                    <h1>Useful Links</h1>
                    <ul>
                       <li id="footer-li"><a href="https://www.irrigation.gov.lk/" target="
                       _blank">Irrigation Department</a></li>
                    
                        <li id="footer-li"><a href="http://irrigation.wp.gov.lk/" target="
                       _blank">Western Provincial Irrigation Department</a></li>
                       <li id="footer-li"><a href="https://doa.gov.lk/" target="
                       _blank">Department of Agriculture</a></li>
                         <li id="footer-li"><a href="http://irrigation.wp.gov.lk/" target="
                       _blank">irrigation Department Office Colombo</a></li>
                     
                    
                    
                    
                   </ul>
                    
                </div>
            </div>

            <div className="col">
                <div className="right">
                    <h1>Contact details</h1>
                    <ul>
                    <li id="footer-li">Director,Department of irrigation(WP)</li>
                    <li id="footer-li">25,Maligawa Rd, Rathmalana.</li>
                    <li id="footer-li"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>Tel: 0112642991</li>
                    <li id="footer-li">Fax: 0112632848</li>
                    <li id="footer-li">Irrigation Department Office Colombo : 0112634662</li>
                    <li id="footer-li">Irrigation Department Office Gampaha : 0330000361</li>
                    <li id="footer-li">Irrigation Department Office Kalutara: 0342221292</li>
                    
                    <li id="footer-li"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email: info@irrigation.wp.go</li>
                    </ul>
                    <ul className='footer-icons'>
                        <li id="footer-li">
                       <a href="https://www.facebook.com/people/Irrigation-Department-Sri-Lanka/100067762862288/"target="
                       _blank"><FaFacebook/></a></li>
                    
                         

                         <li id="footer-li">
                         <a href="https://twitter.com/AgriTwitt"target=" _blank"> < FaTwitter/></a></li>
                   
                         
                         <li id="footer-li">
                         <a href="https://www.youtube.com/channel/UCNMDH_WaGfHMQt6LzEVgxVw"target=" _blank"> < FaYoutube/></a></li> 
                        
                    </ul>
                    
                
                   </div>
                </div>
               

           </div>
        </div>
 

                    
    );
}


        

export default Contactus;