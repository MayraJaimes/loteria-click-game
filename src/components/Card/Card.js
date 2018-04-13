import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {
    status: false
  };

  handleClickEvent = () => {
    if (this.state.status) {
      this.props.gameOver(this.props.score);
      //shake animation
      // card states = false;
    }
    else {
      this.setState({
        status: true
      }, () => console.log(this.state.status));
      this.props.incrementScore(this.props.score);
    }
    this.props.shuffleArray(this.props.cards);
    this.props.guessMessage(this.state.status);
  }

  render() {
    return (
        <div onClick={this.handleClickEvent} className="imageContainer">
          <img
            alt={this.props.card.name}
            src={this.props.card.image} />
        </div>
    )
  }
}


export default Card;