import React from "react";
import './styles/Aboutus.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Topbar from "./topbar";


const Aboutus = () => {
    return(
        <div className="row">
           
            <div className="col ">

                <div className="leftside">
                   <div className="text">
                       About Us
                       <div className="arrow">

                     
                      
                         </div>
                       </div>
                </div>
            </div>

            <div className="col">
                <div className="rightside">
                    <div className="description">

                    <p>We are the people of Department of irrigation, here to serve the high quality service to the humans. Our management provides instant support for any irrigation services at your perspective.</p>
                   <p>The online management system is designed to aqquire a highly functionabe and easier accesible platform for department processes and client needs.</p>
                    </div>
                </div>
            </div>

        </div>


  
     
    );
    
}

export default Aboutus;