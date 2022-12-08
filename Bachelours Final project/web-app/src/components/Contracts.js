import React from 'react';
import './styles/Contracts.css';
import { useState } from 'react';



const Contracts = () => {
    const[contract_name,setContract_name,] = useState("");
    const[contract_handover_date,setContract_handover_date] = useState("");
   



    let handleContract = async (e) => {
        e.preventDefault();
       try{

           var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
   "contract_name": contract_name?contract_name: "",
    "contract_handover_date": contract_handover_date?contract_handover_date: "",	    

	});
	
	var requestOptions = {
	
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'

	};
	
	fetch(" http://localhost:8080/api/contract /add", requestOptions)
	  .then(response => response.json())
	  .then((res)=>{console.log(res);
	  if(res.project_emp_id){
    alert("contract is added successfully");
	    if(res){
      localStorage.setItem("",res.project_emp_id);
     
	    }

	  }else{
    localStorage.setItem("project_emp_id",'');
   alert("contract adding is unsuccessfull");
  }
	  }).catch(error => console.log('error', error));	
	} catch (err) {
	    console.log(err);
	  }
	};
	
	        function pageLoads(){
	        alert(" Fill this application to request for new contracts issued by Irrigation Department.Enter project details  and submit your proposals.");

	    }
  
	    
	 

















    return(

        <div className="Head-section">
            <tr>
        <td className="fu-gui">Available projects</td>
        <td className="fu-gui"><select >
    <option value="Technical officer">Mahwawa construction </option>
    <option value="Rural Assistant">Understreet stream construction</option>

    <option value="Divisional Secretary officer">Tank Kalutara construction</option>


    </select></td>
        </tr>
            <div className="Apply-container">
                
                <div className="title-contract">Application for Requesting Contracts</div>
                <form >
<table>
                
        <tr >
        <td className="fu-gui">Contracter Name</td>
        <td className="fu-gui"><input placeholder="Enter your Name"type="text"name="ConName" id="ConName"value={contract_name} onChange={(e)=>{setContract_name(e.target.value); console.log(contract_name);}} /> </td>
        </tr>


     

    <tr>
        <td className="fu-gui">Date</td>
        <td className="fu-gui"><input placeholder="Enter your email"type="email"name="ConDate" id="ConDate"value={contract_handover_date} onChange={(e)=>{setContract_handover_date(e.target.value); console.log(contract_handover_date);}}/></td>
        </tr>

   
      
   

  
        <tr>
    
	        <td><button onClick={handleContract}type="submit" button className="btn-submit-suggest">Submit</button></td>
	        
	        </tr>            
	       
       

    

</table>
                   <button onClick= {pageLoads} id="btn-guide-pro-sug">Click to see user guide options</button>   
</form>
</div>
</div>
    )
}        
       

export default Contracts;
							
        
      