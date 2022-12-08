import React from 'react';
import './styles/FinishedProjects.css';
import RighthandSearch from "./RighthandSearch";
import project1 from '../components/images/project1.jpg';
import project2 from '../components/images/project2.jpg';

const FinishedProjects = () => {
    return (
        
       <div className='head-finished'> 
       <div className='finished'>
     	<RighthandSearch/>
       
         </div>
         <table>
             <tr>
                 <td>


         <div className='project-1'>
             <div className='project-1-name'>

                 1.Udawela Stream Project
             </div>
          
           <img src={project1}></img>

         </div>
         </td>
             
                 <td>
             <div className='project-1-description'>

<p>the project is near to Matugama Udawela area.The dealing constructors in the area has take the ownership </p>
    <p>to cut this long stream to supply water to the paddy-fields in 2018.</p>
    <p>The Supervisor of the project is Mr.Jayantha Kumarasinghe.</p>

</div>
</td>
</tr>
                 <tr>
                     <td>
                 <div className='project-2'>
             <div className='project-2-name'>

                 2.Udawela Stream Project
             </div>
        
        
        
          
           <img src={project2}></img>

         </div>
         </td>
         <td>
         <div className='project-2-description'>

             <p>the project is near to odangoda area.The Village farming society group has suggeste this and they passes the</p>
             <p> money for cut this stream. The Supervisor is Mrs.Chamari Nayanakumari.</p>

         </div>
         
         </td>
         </tr>
         </table>
</div>
         

    )
}

export default FinishedProjects;