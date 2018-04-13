import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {
    status: false
  };

  handleClickEvent = () => {
    if (this.state.status) {
      this.props.outcome(this.state.status);
      //shake animation
      // card states = false;
    }
    else {
      console.log(this.state.status)
      this.setState({
        status: true
      }, () => console.log(this.state.status));
      this.props.outcome(this.state.status);
    }
    this.props.shuffleArray(this.props.cards);
  }

  render() {
    return (
        <div onClick={this.handleClickEvent} className="imageContainer">
          <img
            alt={this.props.card.name}
            src={this.props.card.image}/>
        </div>
    )
  }
}


export default Card;