import React from "react";
import "./Characters.css";

const Characters = props => (
  <div className="imageContainer">
    <img alt={props.name} src={props.image} />
  </div>
);

export default Characters;

// <span onClick={() => props.removeFriend(props.id)} className="remove">
// 𝘅
// </span>