import medcentre from '../../Assets/medcentre.png';
import './HospitalDetails.css';
import like from '../../Assets/like.png';
import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';

const bookingId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let result = '';
    for(let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const HospitalDetail = ({ data, index, setCurrent, type }) => {

    useEffect(() => {
        localStorage.setItem('Hospital', JSON.stringify({ id: -1, name: '', location: '' }));
        localStorage.setItem('Date', JSON.stringify({ id: -1, date: '' }));
        localStorage.setItem('Time', JSON.stringify({ id: -1, time: '' }));
    }, []);

    const handleClick = () => {
        setCurrent(index);
        localStorage.setItem('Hospital', JSON.stringify({ id: index, name: data["Hospital Name"], location: `${data.City}, ${data.State}` }));
        const bookingDate = JSON.parse(localStorage.getItem('Date'));
        const bookingTime = JSON.parse(localStorage.getItem('Time'));
        const bookingHospital = JSON.parse(localStorage.getItem('Hospital'));

        const bookings = JSON.parse(localStorage.getItem('MyBookings'));
        console.log(bookings);

        if (bookingHospital?.id !== bookingDate?.id)
            return enqueueSnackbar('Please choose a date', { variant: 'warning' });

        if (bookingHospital?.id !== bookingTime?.id)
            return enqueueSnackbar('Please choose a slot', { variant: 'warning' });

        const newBooking = { id: bookingId(), name: bookingHospital.name, location: bookingHospital.location, date: bookingDate.date, time: bookingTime.time };
        const myBookings = bookings === null ? [newBooking] : [...bookings, newBooking];
        localStorage.setItem('MyBookings', JSON.stringify(myBookings));
        enqueueSnackbar('Booking confirmed. Please check My Bookings for more information.', { variant: 'success' });

        localStorage.setItem('Hospital', JSON.stringify({ id: -1, name: '', location: '' }));
        localStorage.setItem('Date', JSON.stringify({ id: -1, date: '' }));
        localStorage.setItem('Time', JSON.stringify({ id: -1, time: '' }));
        setCurrent(-1);
    };

    return (
        <div className="container">
            <img src={medcentre} alt="hospital" />
            
            <div className="wrapper">
                <div className="content">
                    <h4>{type === 'bookings' ? data.name : data["Hospital Name"]}</h4>
                    <h6>{type === 'bookings' ? data.location : `${data.City}, ${data.State}`}</h6>
                    <p>Smilessence Center for Advanced Dentistry + 1</p>

                    {type !== 'bookings' &&
                    <div className="contentBottom">
                        <span>FREE</span>
                        <p className="fee">₹500</p>
                        <p>Consultation fee at clinic</p>
                    </div>}

                    <p className="dotted"></p>
                    <img src={like} alt="like" />
                </div>
            
                {type === 'bookings' ?
                <div className="footerSlots">
                    <span>{data.time}</span>
                    <span>{data.date}</span>
                </div>
                :
                <div className="footer">
                    <span>Available Today</span>
                    <button onClick={handleClick}>Book FREE Center Visit</button>
                </div>}
            </div>
        </div>
    );
};

export default HospitalDetail;
