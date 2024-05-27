import  './HospitalCards.css'
import SlotBooking from '../SlotBooking/SlotBooking'
import HospitalDetail from '../HospitalDetails/HospitalDetails'

const HospitalCards = ({data, setCurrent, current, index}) =>
{

    return(
        <div className='main'>
            <HospitalDetail 
                data={data} 
                index={index} 
                setCurrent={setCurrent}
            />
            {current === index && 
            <SlotBooking 
                data={data} 
                bookingIndex={index}
            />}
        </div>
    )
}

export default HospitalCards