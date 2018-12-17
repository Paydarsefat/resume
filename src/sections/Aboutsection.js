import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import { Link, Element } from "react-scroll";
import Downicon from "../components/downicon";
import Upicon from "../components/upicon";

import data from "../data";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Element name="About" />
        <Fullpage>
          <h3>{data.section[0].title}</h3>
          <p>{data.section[0].item[0].content}</p>
          <Link
            activeClass="active"
            to="Title"
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
            <Upicon />
          </Link>
          <Link
            activeClass="active"
            to="Skills"
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
            <Downicon />
          </Link>
        </Fullpage>
      </div>
    );
  }
}
