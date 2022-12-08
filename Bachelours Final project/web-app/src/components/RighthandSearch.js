import React from 'react';

import './styles/RighthandSearch.css';

import SearchIcon from '@mui/icons-material/Search';



const RighthandSearch = () => {
    return (
        
       <div className='header-search'>
          <div className="search-bar">
             <button className="search-btn">


             <SearchIcon/>
             </button>
         <input type="text" placeholder="search"/>
        </div>
        
      
           
       
       </div> 

    )

}
export default RighthandSearch;
     	