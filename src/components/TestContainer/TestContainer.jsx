import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";

function TestContainer({
  timeRemaining,
  timeStarted,
  selectedParagraph,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange,
}) {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeContainer
            timeRemaining={timeRemaining}
            timeStarted={timeStarted}
            selectedParagraph={selectedParagraph}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
          ></TypingChallengeContainer>
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain words={words} characters={characters} wpm={wpm}></TryAgain>
        </div>
      )}
    </div>
  );
}

export default TestContainer;
