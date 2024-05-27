import React from "react";
import heroimage from "../../Assets/heroimage.png";
import  "./Hero.css";
import Searchbox from "../Searchbox/Searchbox";

function Hero() {
  return (
    <div className="herosection">
      <div className="wrapper">
        <div className="content">
          <div className="innercontent">
            <h3>Skip the travel! Fine online</h3>

            <span>
              Medical <span style={{color:'#2aa7ff'}}>Centers</span>
            </span>
          </div>
          <p>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button >Find Centers</button>
        </div>
        <div className="heroimage">
          <img src={heroimage} alt="icon" />
        </div>
      </div>

      <div className="searchbox">
        <Searchbox></Searchbox>
      </div>
    </div>
  );
}

export default Hero;
