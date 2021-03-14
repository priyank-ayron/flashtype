import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

function TypingChallenge({
  timeRemaining,
  timeStarted,
  selectedParagraph,
  testInfo,
}) {
  return (
    <div className="typing-challenge">
      <div class="timer-container">
        <div class="timer">
          00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </div>
        {!timeStarted ? (
          <div class="timer-info">Start typing to start the test.</div>
        ) : (
          <div className="timer-info"></div>
        )}
      </div>
      <div class="textarea-container">
        <div class="textarea-left">
          <div class="textarea test-paragraph">
            {testInfo.map((testCharacter) => {
              return (
                <TestLetter individualLetterInfo={testCharacter}></TestLetter>
              );
            })}
          </div>
        </div>
        <div class="textarea-right">
          <textarea class="textarea" placeholder="Start typing here"></textarea>
        </div>
      </div>
    </div>
  );
}

export default TypingChallenge;
