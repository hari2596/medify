import './SearchBar.css';
import locationTag from '../../Assets/location.png';
import search from '../../Assets/search.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const Searchbar = ({ setLocation, type, setSearchHospital }) => {
    const [address, setAddress] = useState({ state: '', city: '' });
    const [statesList, setStatesList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);
    const [hospitalName, setHospitalName] = useState('');

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
        getCities();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(address);
    };

    const getStates = async () => {
        try {
            const url = 'https://meddata-backend.onrender.com/states';
            const response = await axios.get(url);
            setStatesList(response.data);
        } catch (error) {
            enqueueSnackbar('Error occurred, try again or refresh', { variant: 'error' });
        }
    };

    const getCities = async () => {
        try {
            const url = `https://meddata-backend.onrender.com/cities/${address.state}`;
            const response = await axios.get(url);
            setCitiesList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStates();
    }, []);

    useEffect(() => {
        getCities();
        setCitiesList([]);
        setAddress({ state: address.state, city: '' });
    }, [address.state]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchHospital(hospitalName);
    };

    return (
        <div className="searchwrapper">
            {type === "bookings" && <h1 className="bookingheader">My Bookings</h1>}
            {type !== "bookings" ?
                <form className="searchbar" onSubmit={handleSubmit}>

                    <div className="searchbar_input" style={{ width: '30%' }}>
                        <select name="state" onChange={handleChange}>
                            <option value="">State</option>
                            {statesList?.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>

                        <img 
                            src={locationTag} 
                            alt="location" 
                        />
                    </div>

                    <div className="searchbar_input" style={{ width: '40%' }}>
                        <select name="city" onChange={handleChange}>
                            <option value="">City</option>
                            {citiesList?.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>

                        <img 
                            src={locationTag} 
                            alt="location" 
                        />
                    </div>

                    <button type="submit">
                        <img src={search} alt="search" />
                        Search
                    </button>

                </form>
                :
                <form className="bookbar" onSubmit={handleSearch}>
                    <input 
                        placeholder="Search By Hospital" 
                        name="hospital" 
                        onChange={(e) => setHospitalName(e.target.value)} 
                        value={hospitalName} 
                        style={{ paddingLeft: '20px' }} 
                    />

                    <button type="submit">
                        <img src={search} alt="search" />
                        Search
                    </button>
                </form>}
        </div>
    );
};

export default Searchbar;
