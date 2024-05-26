import logo from '../../Assets/logo.png'
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () =>
{
    return(
        <Link to='/'>
            <img className='logo' src={logo} alt="logo"/>
        </Link>
    )
}

export default Logo;