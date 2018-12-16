import React, { Component } from "react";
import { Link } from "react-scroll";

export default class About extends Component {
  render() {
    return (
      <div>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1}
          isDynamic={true}
          onSetActive={this.handleSetActive}
          onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
        >
        About
        </Link>
      </div>
    );
  }
}
