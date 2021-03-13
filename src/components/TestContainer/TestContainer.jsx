import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";

function TestContainer({ words, characters, wpm }) {
  const timeReamining = 30;
  return (
    <div className="test-container">
      {timeReamining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeContainer
            words={words}
            characters={characters}
            wpm={wpm}
          ></TypingChallengeContainer>
        </div>
      ) : (
        <div class="try-again-container">
          <TryAgain words={words} characters={characters} wpm={wpm}></TryAgain>
        </div>
      )}
    </div>
  );
}

export default TestContainer;
