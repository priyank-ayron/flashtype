import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const url =
  "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text";

const TotalTime = 2;
const DefaultState = {
  selectedParagraph: "",
  testInfo: [],
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
};

class App extends React.Component {
  state = DefaultState;
  handleUserInput = (input) => {
    if (!this.state.timeStarted) {
      this.startTimer();
    }
    const characters = input.length;
    const words = input.split(" ").length;
    const index = characters - 1;
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });

      return;
    }
    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words,
      });
      return;
    }
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

    // Check for mistake
    const isMistake = input[index] === testInfo[index].testLetter;

    // Update the testInfo
    testInfo[index].status = isMistake ? "correct" : "incorrect";

    // Update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  startAgain = () => {
    this.fetchNewParagraph();
  };

  startTimer = () => {
    this.setState({ setTimeStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  componentDidMount() {
    this.fetchNewParagraph();
  }

  fetchNewParagraph = () => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        this.setState({ setSelectedParagraph: data });
        const selectedParagraphArray = data.split("");
        const temp = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });
        this.setState({
          ...DefaultState,
          testInfo: temp,
          selectedParagraph: data,
        });
      });
  };

  render() {
    return (
      <div className="app">
        <Nav></Nav>
        <Landing></Landing>
        <Footer></Footer>
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          timeStarted={this.state.timeStarted}
          timeRemaining={this.state.timeRemaining}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        ></ChallengeSection>
      </div>
    );
  }
}

export default App;
