import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const TotalTime = 60;
const url = "http://metaphorpsum.com/paragraphs/1/9";

function App() {
  const [selectedParagraph, setSelectedParagraph] = useState("");
  const [testInfo, setTestInfo] = useState([]);
  var state = {
    timeStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  };
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        setSelectedParagraph(data);
        const selectedParagraphArray = data.split("");
        const temp = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });
        setTestInfo(temp);
      });
  }, []);

  console.log(testInfo);
  return (
    <div className="app">
      <Nav></Nav>
      <Landing></Landing>
      <Footer></Footer>
      <ChallengeSection
        selectedParagraph={selectedParagraph}
        timeStarted={state.timeStarted}
        timeRemaining={state.timeRemaining}
        words={state.words}
        characters={state.characters}
        wpm={state.wpm}
        testInfo={testInfo}
      ></ChallengeSection>
    </div>
  );
}

export default App;
