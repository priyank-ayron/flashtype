import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;
