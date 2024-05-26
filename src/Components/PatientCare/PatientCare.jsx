import React from "react";
import bluetick from '../../Assets/bluetick.png'
import Patientcareimg from '../../Assets/Patientcare.png'
import './PatientCare.css'

function PatientCare() {
  return (
    <div className="patientCare">
      <img src={Patientcareimg} alt="patient care image" />
      <div className="contentCareTop">
        <span>HELPING PATIENTS FROM AROUND THE GLOBE!!</span>
        <h1>
          Patient <span>Caring</span>
        </h1>
        <p>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div className="contentCareBottom">
          <p>
            <img src={bluetick} alt="img" />
            Stay Updated About Your Health
          </p>
          <p>
            <img src={bluetick} alt="img" />
            Check Your Results Online
          </p>
          <p>
            <img src={bluetick} alt="img" />
            Manage Your Appointments
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientCare;
