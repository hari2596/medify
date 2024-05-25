import React from 'react' ;
import searchicon from '../../Assets/searchxs.png'
import search from '../../Assets/search.png'
import SearchBoxCards from '../SearchBoxCards/SearchBoxCards';
import { Services } from '../ServicesData/ServicesDetails';


function Searchbox() {
  return (
    <div>
      <div>
      <div>
        <input placeholder='State'></input>
        <img src={searchicon} alt='Search Icon'/>

        
      </div>

<div>
<input placeholder='City'></input>
        <img src={searchicon} alt='Search Icon'/>
</div>
<button> <img  src={search} alt='Search' />SEARCH</button>
</div>
<SearchBoxCards services={Services}></SearchBoxCards>
</div>
  )
}

export default Searchbox ;
