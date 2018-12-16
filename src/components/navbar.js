import React, { Component } from "react";
import About from "./About";

import "./navbar.css";
import Fullpage from "./Fullpage";
import Skills from "./Skills";

export default class navbar extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fullpage className="fix">
        <div className="nav">
          {/* add changecolor buttom */}
          {children}
          {/* <About />
        <Skills />
        <ChangeColor /> */}
          <div className="nav_menu">
            <div style={{ marginRight: "1rem" }}>
              <About />
            </div>
            <div>
              <Skills/>
            </div>
          </div>
        </div>
      </Fullpage>
    );
  }
}
