import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

function TypingChallengeContainer({
  timeRemaining,
  timeStarted,
  selectedParagraph,
  words,
  characters,
  wpm,
  testInfo,
}) {
  return (
    <div className="typing-challenge-container">
      <div class="details-container">
        <ChallengeDetailsCard
          cardName="Words"
          cardValue={words}
        ></ChallengeDetailsCard>
        <ChallengeDetailsCard
          cardName="Characters"
          cardValue={characters}
        ></ChallengeDetailsCard>
        <ChallengeDetailsCard
          cardName="WPM"
          cardValue={wpm}
        ></ChallengeDetailsCard>
      </div>
      <div className="typewriter-challenge">
        <TypingChallenge
          timeRemaining={timeRemaining}
          timeStarted={timeStarted}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
        ></TypingChallenge>
      </div>
    </div>
  );
}

export default TypingChallengeContainer;
