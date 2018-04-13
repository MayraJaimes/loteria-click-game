import React, { Component } from "react";
import Character from "./components/Character";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images
  };

  render() {
    return (
      <div>
        <Header />
        <Wrapper>
        {this.state.images.map(image => (
          <Character
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
