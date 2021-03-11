import React from "react";
import logo from "./../../assets/logo.png";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo"></img>
        <p class="flash-logo-text">Flashtype</p>
      </div>
    </div>
  );
}

export default Nav;
