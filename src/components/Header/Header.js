import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <nav className="navbar">
      <ul>
        <li> Clicky Game </li>
        <li> Outcome </li>
        <li> Score </li>
      </ul>
    </nav> 
    <div className="header">
      <h1>Click Game</h1>
        <h2>Click on an image to earn points, but don't click on any more than once! If you do, your score will reset.
        </h2>
    </div> 
  </div>

);

export default Header;