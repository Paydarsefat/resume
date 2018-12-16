import React, { Component } from "react";

import Titlesection from "./sections/Titlesection";
import Aboutsection from "./sections/Aboutsection";
import Skillsection from "./sections/Skillsection";
import Body from "./components/body";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body>
          <Titlesection />
          <Aboutsection />
          <Skillsection />
        </Body>
      </div>
    );
  }
}

export default App;
