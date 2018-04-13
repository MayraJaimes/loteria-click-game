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
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
