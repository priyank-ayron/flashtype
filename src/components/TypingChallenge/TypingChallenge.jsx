import React from "react";
import "./TypingChallenge.css";

function TypingChallenge({ selectedParagraph }) {
  return (
    <div className="typing-challenge">
      <div class="timer-container">
        <div class="timer">00:60</div>
        <div class="timer-info">Start typing to start the test.</div>
      </div>
      <div class="textarea-container">
        <div class="textarea-left">
          <div class="textarea test-paragraph">{selectedParagraph}</div>
        </div>
        <div class="textarea-right">
          <textarea class="textarea" placeholder="Start typing here"></textarea>
        </div>
      </div>
    </div>
  );
}

export default TypingChallenge;
