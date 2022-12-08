import React,{useState} from "react";
import './styles/RightNav.css'
import  { Link } from 'react-router-dom';


const RightNav = () => {
const [variable, setVariable] = useState(true);

    return(
<div className="right-side-bar" style={{display:'flex'}}>
    <nav >
        <ul className="sections-right-side-bar">
            <li>Suggested Project proposals</li>

            
            <li>  Approved Project proposals</li>
            <li>  Aproved Project Estimates</li>
        </ul>
    </nav>
    </div>
);
}

export default RightNav;
       