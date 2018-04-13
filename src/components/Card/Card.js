import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {
    status: false
  };

  handleClickEvent = () => {
    console.log("CLICKING");
    console.log(this.state.status);
    if (this.state.status) {
      console.log("gaveover");
      console.log(this.state.status);
      // this.props.gameOver = () => {
      // score reset to 0;
      // card states = false;
      // Then -> restart the game;
      // }
    }
    else {
      this.setState({
        status: true
      }, () => console.log(this.state.status));
      // this.props.shuffleCard = () => {
      // randomize array
      // }
      // this.props.addScore = () => {
      // score + 1
      // }
    }
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