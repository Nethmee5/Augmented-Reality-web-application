import React from 'react';
	
import './styles/ProjectSuggestion.css';
import { useState } from 'react';
	

const ProjectSuggestion = () => {
	

 const[project_emp_id,setProject_emp_id,] = useState("");
 const[project_name,setProject_name] = useState("");
 const[project_suggestor,setProject_suggestor] = useState("");
 const[project_added_date,setProject_added_date] = useState("");

   
 let handleSubmit = async (e) => {
        e.preventDefault();
       try{

           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
   "project_emp_id": project_emp_id?project_emp_id: "",
    "project_name": project_name?project_name: "",	    
    "project_suggestor": project_suggestor?project_suggestor:"",
   "project_added_date": project_added_date?project_added_date:"",	
  
	});
	
	var requestOptions = {
	
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'

	};
	
	fetch("http://localhost:8080/api/project/add", requestOptions)
	  .then(response => response.json())
	  .then((res)=>{console.log(res);
	  if(res.project_emp_id){
    alert("project is added successfully");
	    if(res){
      localStorage.setItem("",res.project_emp_id);
     
	    }

	  }else{
    localStorage.setItem("project_emp_id",'');
   alert("Registration is unsuccessfull");
  }
	  }).catch(error => console.log('error', error));	
	} catch (err) {
	    console.log(err);
	  }
	};
	
	        function pageLoads(){
	        alert(" Enter project details  and submit your proposals.");

	    }
  
	    
	 


	    return(

    




	<div className="header-Pro-sug">
	            <div className="sug-contain">
	             
                <div className="title-sug">Application for Suggest a project</div>
               <form className='form-design'>	<table>
	                
	        <tr >
	        <td className="fu-gui">Employee ID</td>
        <td className="fu-gui"><input placeholder="Enter your Name"type="text"id="fullName" name="name"value={project_emp_id} onChange={(e)=>{setProject_emp_id(e.target.value); console.log(project_emp_id);}} /> </td>
       </tr>    
       <tr>
        <td className="fu-gui">Project  Name</td>
        <td className="fu-gui"><textarea rows = "5" cols = "50"input placeholder="Describe your project in short terms"type="text"id="proName" value={project_name} onChange={(e)=>{setProject_name(e.target.value); console.log(project_name);}} />
        </td>
       
    


              
              </tr> 	           	      
                <tr>
        <td className="fu-gui">Post</td>
      <td className="fu-gui"><select name="post" id="post"value={project_suggestor} onChange={(e)=>{project_suggestor(e.target.value); console.log(project_suggestor);}}>
   
	    <option value="Rural Assistant">Rural Assistant</option>
	
	    <option value="Divisional Secretary officer">Divisional Secretary Officer</option>
	
	    <option value="Ministry officer">Ministry officer</option>
	
	    </select></td>
	        </tr>
	       <tr>
	        <td className="fu-gui">Project added date</td>
	        <td className="fu-gui"><input placeholder="DD/MM/YYYY"type="text"id="date" name="date"value={project_added_date} onChange={(e)=>{setProject_added_date(e.target.value); console.log(project_added_date);}} /> </td>
	          </tr> 
	           
	 
	<tr>
	        <td><button onClick={handleSubmit}type="submit" button className="btn-submit-suggest">Submit</button></td>
	        
	        </tr>            
	       
	
	</table>
	<button onClick= {pageLoads} id="btn-guide-pro-sug">Click to see user guide options</button>    

	</form>
	
	</div>
	</div>
	

	    )
	}
	
	export default ProjectSuggestion;