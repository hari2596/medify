import Routes from "../Routes/Routes";
import './CollapseNavbar.css'

const CollapseNavbar = ({setCollapse, collapse}) =>
{
    return(
        <div className='container-nav'>
            <Routes setCollapse={setCollapse} collapse={collapse}/>
        </div>
    )
}

export default CollapseNavbar;