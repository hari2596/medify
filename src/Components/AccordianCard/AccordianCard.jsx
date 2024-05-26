import React from "react";
import plus from '../../Assets/plus.png'
import './AccordianCard.css'

function AccordianCard({ data, active, setActive, index }) {
  return (
    <div key={data.id} className="drop">
      <div className="question">
        <p>{data.que}</p>
        <p onClick={() => setActive((prev) => (prev === index ? -1 : index))}>
          <img src={plus} alt="dropdown" />
        </p>
      </div>

      {active === index && (
        <div className='answer'>
          <p>{data.ans}</p>
        </div>
      )}
    </div>
  );
}

export default AccordianCard;
