import React from "react";
import "./Card.css";

const Card = props => (
    props.cards.map(card => (
      <div className="imageContainer" key={card.id}>
        <img
          alt={card.name}
          src={card.image} />
      </div>
    ))
);

export default Card;
