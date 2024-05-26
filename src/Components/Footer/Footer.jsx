import { FooterData } from "../FooterList/FooterListData";
import  './Footer.css'
import logo from '../../Assets/logo.png'
import facebook from '../../Assets/facebook.png'
import twitter from '../../Assets/twitter.png'
import youtube from '../../Assets/youtube.png'
import pinterest from '../../Assets/pinterest.png'
import FooterList from "../FooterList/FooterList";

const fistColumndata = FooterData.slice(0,5);
const secondColumndata = FooterData.slice(5,10);
const thirdColumndata = FooterData.slice(10);

const Footer = () =>
{
    return(
        <div className='footer'>

            <div className='upperfooter'>
                <div className='left'>
                    <div>
                        <img src={logo} alt="Medify"/>
                    </div>

                    <div className='social'>
                        <img src={facebook} alt="social"/>
                        <img src={twitter} alt="social"/>
                        <img src={youtube} alt="social"/>
                        <img src={pinterest} alt="social"/>
                    </div>
                    
                </div>

                <div className='footergroup'>
                    <FooterList footerdata={fistColumndata}/>
                    <FooterList footerdata={secondColumndata}/>
                    <FooterList footerdata={thirdColumndata}/>
                </div>
            </div>

            <div className='copyright'>
                <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer;