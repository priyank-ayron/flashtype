import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

function ChallengeSection() {
  return (
    <div className="challenge-section-container">
      <div data-aos="fade-down" className="challenge-section-header">
        <h1>Take a speed test now!!!</h1>
        <TestContainer words={4} characters={65} wpm={9}></TestContainer>
      </div>
    </div>
  );
}

export default ChallengeSection;
