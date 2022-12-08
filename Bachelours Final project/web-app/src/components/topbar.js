import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import irrlogo from '../components/images/irr logo.jpg';

import React from 'react';


const Topbar = () => {
    return (
        <div className='sum1'>
            <div className="topbar">
   
                    <ul className='ul'>
                      
                           <li id='Logo-img'>

                               <img src ={irrlogo}/>
                        
                            
                            </li>
    
                         <li id="name">
                             Irrigation Department <br></br>
                             Sri Lanka /  Western Province
                            
                             </li>
                    
              
                          <li id="email">
                             <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> </li>
                             <li id= "email-icon-name">                  
                             dieoffice@gmail.com
                             </li>

                          <li id="phone">
                          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> </li> 
                          <li id="phone-icon-name">
                              0112-456963
                              </li>
                           
                          <li id="fb">
                              
                      
                          
                              </li>
                              <li id="tw">
                        
                          
                              </li>
                                
            </ul>
 
      </div>
      </div>

 
    );
}

export default Topbar;

