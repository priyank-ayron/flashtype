import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const url =
  "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text";

const TotalTime = 60;
const DefaultState = {
  selectedParagraph: "Hello World!",
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
  };

  startTimer = () => {
    console.log("started");
    this.setState({ setTimeStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        this.setState({ timeRemaining: this.state.timeRemaining - 1 });
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
        this.setState({ testInfo: temp });
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
        ></ChallengeSection>
      </div>
    );
  }
}

export default App;
