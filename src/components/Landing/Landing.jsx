import React from "react";
import "./Landing.css";
import hero from "../../assets/hero.png";
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" class="landing-left">
        <h1 className="landing-header">Can you type...</h1>
        <div class="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast ?", "Correct ?", "Quick ?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div data-aos="fade-left" class="landing-right">
        <img className="hero-image" src={hero} alt="flash"></img>
      </div>
    </div>
  );
}

export default Landing;
