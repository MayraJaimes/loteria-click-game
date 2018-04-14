import React, { Component } from "react";
import { ToastContainer, toast, style } from 'react-toastify';

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import cards from "./cards.json";

style({
  width: "300px"
});

class App extends Component {
  state = {
    cards: cards,
    clicked: [],
    score: 0,
    topScore: 0,
    message: "Click a card to begin!",
    gameEnd: false
  };

  shuffleArray = () => {
    const cards = this.state.cards;
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    this.setState({ cards });
  };

  outcome = name => {
    const clickedArr = [...this.state.clicked];
    const score = this.state.score + 1;

    if (this.state.clicked.includes(name)) {
      toast(
        "You had already clicked that one! You lose!!",
        { autoClose: 2000,
          type: toast.TYPE.ERROR,
          position: toast.POSITION.TOP_CENTER
        })
      return this.setState({
        clicked: [],
        message: "You had already clicked that one!",
        score: 0,
        gameEnd: true
      });
    }

    else {
      toast("Great job, keep going!", 
      { autoClose: 2000, 
        type: toast.TYPE.SUCCESS, 
        position: toast.POSITION.TOP_CENTER 
      })

      clickedArr.push(name);
      this.shuffleArray();

      this.setState({
        message: "Great job, keep going!",
        clicked: clickedArr,
        score,
        topScore: score > this.state.topScore ? score : this.state.topScore,
        gameEnd: false
      });

      this.shuffleArray();

    }
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <Header
          score={this.state.score}
          message={this.state.message}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              card={card}
              key={card.id}
              outcome={this.outcome}
              gameEnd={this.state.gameEnd}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
