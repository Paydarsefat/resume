import React, { Component } from "react";
import Navbar from "./navbar";

import "./body.css";

export default class Body extends Component {
  constructor() {
    super();
    this.changeColor = this.changeColor.bind(this);
    this.state = { backgroundColor: "blueviolet", color: "white" };
  }
  changeColor() {
    var randomColorbackground =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    var randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);

    this.setState({
      backgroundColor: randomColorbackground,
      color: randomColor
    });
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.backgroundColor,
            color: this.state.color
          }}
        >
          <Navbar>
            <div className="nav_change ">
              <div
                onClick={() => this.changeColor()}
                style={{ cursor: "pointer" }}
              >
                ChangeTheme
              </div>
            </div>
          </Navbar>
          {children}
        </div>
      </div>
    );
  }
}
