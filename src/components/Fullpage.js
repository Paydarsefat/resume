import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import "./Fullpage.css";

export default class Fullpage extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div className={`fullpage ${this.props.className} ||''`}>
          <SnowStorm/>
          {children}
        </div>
      </div>
    );
  }
}
