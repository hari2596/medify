import { useState } from 'react';
import Logo from '../Logo/Logo';
import Routes from '../Routes/Routes'; 
import  './Navbar.css';
import CollapseNavbar from '../CollapseNavbar/CollapseNavbar';
import Hamburger from '../Hamburger/Hamburger';

const Navbar = () =>
{
    const [collapse, setCollapse] = useState(false);

    return(
        <div className='navbar'>
            <Logo/> 
            {collapse && <CollapseNavbar setCollapse={setCollapse} collapse={collapse}/>}
            <button className='dropbutton' onClick={()=> setCollapse(!collapse)}>
                <Hamburger/>
            </button>
            <div className='collapse'>
                <Routes type="navbar"/>
            </div>
        </div>
    )
} 

export default Navbar;
