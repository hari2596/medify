import React from "react";
import "./DoctorsCard.css";

function DoctorsCard({ doctor }) {
  return (
    <div className="container-doctor">
      <div className="mainCard-doctor">
        <img src={doctor.image} alt="Doctor" />
      </div>
      <div className="content-doctor">
        <h3>{doctor.name}</h3>
        <span className="department">{doctor.department}</span>
      </div>
    </div>
  );
}

export default DoctorsCard;
