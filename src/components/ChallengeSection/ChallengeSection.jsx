import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

function ChallengeSection({
  timeRemaining,
  timeStarted,
  selectedParagraph,
  words,
  characters,
  wpm,
  testInfo,
}) {
  return (
    <div className="challenge-section-container">
      <div data-aos="fade-down" className="challenge-section-header">
        <h1>Take a speed test now!!!</h1>
        <TestContainer
          timeRemaining={timeRemaining}
          timeStarted={timeStarted}
          selectedParagraph={selectedParagraph}
          words={words}
          characters={characters}
          wpm={wpm}
          testInfo={testInfo}
        ></TestContainer>
      </div>
    </div>
  );
}

export default ChallengeSection;
