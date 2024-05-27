import searchicon from "../../Assets/searchxs.png";
import search from "../../Assets/search.png";
import SearchBoxCards from "../SearchBoxCards/SearchBoxCards";
import { Services } from "../ServicesData/ServicesDetails"; //data
import './Searchbox.css' ;

function Searchbox() {
  return (
    <div className="searchbox">
      <div className="form">

        <div className="innerdiv"> 
          <input placeholder="State"></input>
          <img className="search" src={searchicon} alt="Search Icon" />
        </div>

        <div className="innerdiv">
          <input placeholder="City"></input>
          <img src={searchicon} alt="Search Icon" />
        </div>
        <button>
          {" "}
          <img className="search" src={search} alt="Search" />
          Search
        </button>
      </div>
      <SearchBoxCards services={Services}></SearchBoxCards>
    </div>
  );
}

export default Searchbox;
