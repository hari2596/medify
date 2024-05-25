import React from "react";
import heroimage from "../../Assets/heroimage.png";
import styles from "./Hero.module.css";
import Searchbox from "../Searchbox/Searchbox";

function Hero() {
  return (
    <div className="styles.herosection">
      <div className="styles.wrapper">
        <div className="styles.content">
          <div className="styles.innercontent">
            <h3>Skip the travel! Fine online </h3>

            <span>
              Medical <span>Centers</span>
            </span>
          </div>
          <p>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>

          <button>Find Centers</button>
        </div>
        <div className="styles.heroimage">
          <img src={heroimage} alt="Hero Image" />
        </div>
      </div>

      <div className="searchbox">
        <Searchbox></Searchbox>
      </div>
    </div>
  );
}

export default Hero;
