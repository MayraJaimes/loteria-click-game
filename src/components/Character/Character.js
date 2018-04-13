import React from "react";
import "./Character.css";

const Character = props => (
  <div className="imageContainer">
    <img alt={props.name} src={props.image} />
  </div>
);

export default Character;
