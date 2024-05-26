import React from "react";
import "./DoctorsCard.css";

function DoctorsCard({ doctor }) {
  return (
    <div className="container">
      <div className="doctorimage">
        <img src={doctor.image} alt="Doctor" />
      </div>

      <div className="content">
        <h3>{doctor.name}</h3>
        <span>{doctor.department} </span>
      </div>
    </div>
  );
}

export default DoctorsCard;
