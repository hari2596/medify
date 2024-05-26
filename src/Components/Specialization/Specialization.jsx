import { useState } from "react";
import { SpecialisationData } from "./SpecializationData";
import "./Specialization.css";

function Specialization() {
  const [active, setActive] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  const filteredSpl = viewAll
    ? SpecialisationData
    : SpecialisationData.slice(0, 4);

  return (
    <div className="Specialisation">
      <div className="SpecialisationHeader">
        <p>Find By Specialisation</p>
      </div>
      <div className="SpecialisationCards">
        {filteredSpl.map((item) => (
          <div
            className={item.id === active ? `$ {card} ${active}` : 'card'}
            key={item.id}
            onClick={() => setActive(item.id)}
          >
            <img src={item.image} alt="spl-icon" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setViewAll(!viewAll)} className="viewButton">
        {viewAll ? "View Less" : "View All"}
      </button>
    </div>
  );
}

export default Specialization;
