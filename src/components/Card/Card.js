import React, { Component } from "react";
import { shake } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import "./Card.css";

const styles = StyleSheet.create({
  shake: {
    animationName: shake,
    animationDuration: '.5s'
  }
})

class Card extends Component {
  state = {
    clicked: 0
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameEnd === true) {
      console.log('resetting state');
      setTimeout(() => {
          this.setState({
            clicked: 0
          })
        }, 1000)
    }
  }

  handleClickEvent = () => {
    console.log('click event')
    this.setState({
      clicked: this.state.clicked + 1
    }, () => {
      this.props.outcome(this.props.card.name);
    });

  };

  render() {
    console.log('rendering')
    const className = css(
      this.state.clicked > 1 ? styles.shake : ''
    )
    return (
      <div className={className}>
        <div onClick={this.handleClickEvent} className='imageContainer'>
          <img alt={this.props.card.desc} src={this.props.card.image} />
        </div>
      </div>

    );
  }
}

export default Card;
