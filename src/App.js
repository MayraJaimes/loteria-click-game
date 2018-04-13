import React, { Component } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards
  };

  render() {
    return (
      <div>
        <Header />
        <Wrapper>
        {this.state.cards.map(card => (
          <Card 
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
