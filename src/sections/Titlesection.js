import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";
import Downicon from "../components/downicon";

import "./Title.css";

export default class Titlesection extends Component {
  render() {
    return (
      <div>
        <Element name="Title" />

        <Fullpage>
          <div>
            <h1>{data.title}</h1>
          </div>
          <div calssName="kholase">
            <h2>{data.kholase}</h2>
          </div>
          <div>
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
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
            <Downicon />
          </Link>
        </Fullpage>

        <Element name="About" />
      </div>
    );
  }
}
