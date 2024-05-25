import React from 'react' ;
import searchicon from '../../Assets/searchxs.png'
import search from '../../Assets/search.png'


function Searchbox() {
  return (
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
  )
}

export default Searchbox ;
