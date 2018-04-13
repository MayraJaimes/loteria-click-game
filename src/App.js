import React, { Component } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Score from "./components/Score";

import allImages from "./allImages.json";
import "./App.css";

class App extends Component {
  state = {
    allImages
  };

  render() {
    return (
      <div>
        <Header />
        <Wrapper>
        {this.state.allImages.map(image => (
          <Characters
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
