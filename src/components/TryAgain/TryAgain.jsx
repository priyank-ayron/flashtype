import React from "react";
import "./TryAgain.css";

function TryAgain({ words, characters, wpm, startAgain }) {
  const url = "https://www.linkedin.com/in/priyank-agarwal-iiita/";
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>
      <div class="result-container">
        <p>
          <b>Characters: {characters}</b>
        </p>
        <p>
          <b>Words: {words}</b>
        </p>
        <p>
          <b>WPM: {wpm}</b>
        </p>
      </div>
      <div>
        <button
          onClick={() => startAgain()}
          className="start-again-btn end-buttons"
        >
          Re-try
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=" + url,
              "facebook-share-dialog",
              "width=800,height=600"
            )
          }
          className="end-buttons share-btn"
        >
          Share
        </button>
        <button
          onClick={() =>
            window.open(
              "https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
                url,
              "Twitter",
              "width=800,height=600"
            )
          }
          className="end-buttons tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TryAgain;
