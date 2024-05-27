import './Contact.css';
import phone from '../../Assets/mobileapp1.png';
import app from '../../Assets/mobileapp2.png';
import applestore from '../../Assets/applestore.png';
import googleplay from '../../Assets/googleplay.png';
import arrow from '../../Assets/arrow.png';

const Contact = () => {
    return (
        <div className="container">
            <div className="phone1">
                <img src={phone} alt="phone"/>
                <img src={app} alt="phone"/>
            </div>
            <div className="phone2">
                <img src={phone} alt="phone"/>
                <img src={app} alt="phone"/>
            </div>
            <div className="content">
                <div className="contentheader">
                    <h1>Download the <span>Medify</span> App</h1>
                    <img src={arrow} alt="img"/>
                </div>
                <p>Get the link to download the app</p>
                <div className="smswrapper">
                    <div className="smsinner">
                        <p>+91</p>
                        <input placeholder='Enter phone number'/>
                    </div>
                    <button>Send SMS</button>
                </div>
                <div className="app">
                    <img src={googleplay} alt="img"/>
                    <img src={applestore} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
