import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <nav className="navbar">
      <ul>
        <li> Loteria Click Game </li>
        <li> {props.message} </li>
        <li> Score: {props.score} | Top Score: {props.topScore} </li>
      </ul>
    </nav> 
    <div className="header">
      <h1>Loteria Click Game</h1>
        <h2>Click on a loteria card to earn points, but don't click on any more than once! If you do, your score will reset.
        </h2>
    </div> 
  </div>
);

export default Header;