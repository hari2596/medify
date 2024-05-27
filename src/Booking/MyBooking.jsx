import { useEffect, useState } from "react";
import HospitalDetail from "../Components/HospitalDetails/HospitalDetails";
import  "./MyBooking.css";
import Searchbar from "../Components/SearchBar/SearchBar";
import Advertise from "../Components/Advertise/Advertise";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [searchHospital, setSearchHospital] = useState("");

  const filteredHospitalData = myBookings?.filter((bookings) =>
    bookings.name.toLowerCase().includes(searchHospital.toLocaleLowerCase())
  );

  useEffect(() => {
    setMyBookings(JSON.parse(localStorage.getItem("MyBookings")));
  }, []);

  
  return (
    <div className="container-mybooking">
      <Searchbar type="bookings" setSearchHospital={setSearchHospital} />
      <div className='wrapper'>
        {myBookings ? (
          <div>
            {filteredHospitalData.map((data) => (
              <HospitalDetail data={data} type="bookings" />
            ))}
          </div>
        ) : (
          <h1>No Bookings</h1>
        )}
        {myBookings && !filteredHospitalData.length && (
          <h1>No Hospitals Found</h1>
        )}
        <Advertise />
      </div>
    </div>
  );
};

export default MyBookings;
