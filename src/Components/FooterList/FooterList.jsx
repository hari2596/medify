import arrow from '../../Assets/rightshift.png'
import './FooterList.css'

const FooterList = ({footerdata}) =>
{
    return(
        <div className='right'>
            {footerdata.map((data, index)=>
            (
                <span key={index} className='lists'>
                    <img src={arrow} alt="arrow"/>
                    {data.name}
                </span>
            ))}
        </div>
    )
}

export default FooterList;