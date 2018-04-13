import React, { Component } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards: cards,
    score: 0,
    topScore: 0,
    message: "Click a card to begin!"
  };

  shuffleArray = cards => {
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    console.log("cards", cards);
  this.setState({ cards });;
  }

  outcome = (status) => {
    if (status){
      this.setState({ message: "You had already clicked that one!" });
      this.setState({ score: 0 });
  }
    else {
      this.setState({ message: "Great job, keep going!" });
      this.setState({ score: this.state.score + 1 });
    }
  };

  render() {
    return (
      <div>
        <Header 
        score={this.state.score}
        message={this.state.message}
        topScore={this.state.topScore}
        />
        <Wrapper>
        {this.state.cards.map(card => (
          <Card 
          shuffleArray={this.shuffleArray}
          outcome={this.outcome}
          score={this.state.score}
          cards={this.state.cards}
          card={card}
          key={card.id}
          />
        ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
