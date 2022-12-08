import React from "react";
import ConstructionIcon from '@mui/icons-material/Construction';
import useState from "react-hook-use-state";


const MenuItem= (props) => {

    const { name,subMenus,iconClassName, onClick } = props;
    const [expand,setExpand] = useState(false);

    return (
        

     <li>
         <li onClick={props.onClick}></li>
        <a onClick={() => setExpand(!expand)} className='menu-item'>
            <div className="menu-icon">

           {iconClassName}  
            </div>
                
                <span>[name]</span>
                </a>
                
                { subMenus && subMenus.length > 0 ? (
                <ul className={'sub-menu ${expand ? "active" : ""}'}>
                    {subMenus.map((menu,index) =>  (
                    <li key={index}>
                    <a> 
                          {menu.name}
                    </a>
                    </li>
                    ))}
                    </ul>
    ) : null }
                
    
    
    
    </li>
    
    );
}

export default MenuItem;