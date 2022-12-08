 import React from 'react';
import './styles/ApproveProposals.css';
import RightNav from "./RightNav";
import { useState } from 'react';


const ApproveProposals = () => {
  const[approvedProposalStatus,setApprovedProposalStatus] = useState("");
  const[rejectedProposalStatus,setRejectedProposalStatus] = useState("");
  const[approvedEstimateStatus,setApprovedEstimateStatus,] = useState("");
  const[rejectedEstimateStatus,setRejectedEstimateStatus] = useState("");
  
  function handleProposalStatus(){
    alert("added Proposal status successfully")


  }
  function handleEstimateStatus(){
    alert("added Estimate status successfully")


  }

   

    return (
      <div className='head-top'>
            <div className='head'>
          <RightNav/>
       </div>
      
       <div className='sec-up'>
         
       <div className='left-sec-up'>
          <div className="title-reg">Approve proposals</div>
        
          <p>1.Select a project proposal</p>
          <p>2.View project proposal</p>
          <p>3.Select options to Approve or Reject</p>
                <form >
<table>
                
       
        <tr>
        <td className="fu-gui"><input type="checkbox"  />Approve<span class="checkmark"id="fullName" name="name"value={approvedProposalStatus} onChange={(e)=>{setApprovedProposalStatus(e.target.value); console.log(approvedProposalStatus);}}  ></span></td>
      <td className="fu-gui"><input type="checkbox"  />Reject<span class="checkmark"id="fullName" name="name"value={rejectedProposalStatus} onChange={(e)=>{setRejectedProposalStatus(e.target.value); console.log(rejectedProposalStatus);}}></span></td>
        </tr>
        <tr>
        <td><button type="submit" button id="btn-submit-proposal"onClick={handleProposalStatus}>Submit</button></td>
        </tr>
                   
        






</table>

</form>
</div>



          <div className='left-sec-down'>
          <div className="title-reg">Approve Estimates</div>

        <div className="instruction">

          <p>1.Select a project Estimate </p>
          <p>2.View a project Estimate </p>
          <p>3.Select options to Approve or Reject</p>

</div>
         
                <form >
<table>
   
        <tr>
        <td className="fu-gui"><input type="checkbox"  />Approve<span class="checkmark"value={approvedEstimateStatus} onChange={(e)=>{setApprovedEstimateStatus(e.target.value); console.log(approvedProposalStatus);}}></span></td>
        <td className="fu-gui"><input type="checkbox"  />Reject<span class="checkmark"value={rejectedEstimateStatus} onChange={(e)=>{setRejectedEstimateStatus(e.target.value); console.log(rejectedEstimateStatus);}}></span></td>
        </tr>
        <tr>
        <td><button type="submit" button id="btn-submit-estimate"onClick={handleEstimateStatus}>Submit</button></td>
        </tr>
                   
        






</table>

</form>
</div>


</div>
</div>
        
                     
      
     
              
    );
}

export default ApproveProposals;
							
        