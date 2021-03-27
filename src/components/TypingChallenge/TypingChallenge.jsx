import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

function TypingChallenge({
  timeRemaining,
  timeStarted,
  testInfo,
  onInputChange,
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
            {testInfo.map((testCharacter, index) => {
              return (
                <TestLetter
                  key={index}
                  individualLetterInfo={testCharacter}
                ></TestLetter>
              );
            })}
          </div>
        </div>
        <div class="textarea-right">
          <textarea
            class="textarea"
            placeholder="Start typing here"
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TypingChallenge;
