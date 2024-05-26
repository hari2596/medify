import React from "react";
import "./DoctorsCard.css";

function DoctorsCard({ doctor }) {
  return (
    <div className="doctor-card-container">
      <div className="mainCard">
      <div className="doctor-image">
        <img src={doctor.image} alt="Doctor" />
      </div>
      <div className="doctor-content">
        <h3>{doctor.name}</h3>
        <span>{doctor.department}</span>
      </div>
      </div>
      
    </div>
  );
}

export default DoctorsCard;


