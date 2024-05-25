import React from "react";
import heroimage from "../../Assets/heroimage.png";
import styles from "./Hero.module.css";
import Searchbox from "../Searchbox/Searchbox";

function Hero() {
  return (
    <div>
      <h3>Skip the travel! Fine online</h3>

      <span>
        Medical <span>Centers</span>
      </span>

      <p>
        Connect instantly with a 24x7 specialist or choose to video visit a
        particular doctor.
      </p>

      <button>Find Centers</button>

      <div>
        <img src={heroimage} alt="Hero Image" />
      </div>

      <div> 
        <h1>Search</h1>
        <Searchbox></Searchbox>
      </div>

    </div>
  );
}

export default Hero;
