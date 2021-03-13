import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

function TypingChallengeContainer({ words, characters, wpm }) {
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
        <TypingChallenge selectedParagraph="hvjbk"></TypingChallenge>
      </div>
    </div>
  );
}

export default TypingChallengeContainer;
