import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import SkillCarts from "../components/skillCarts";
import { Link, Element } from "react-scroll";
import Upicon from "../components/upicon"

import data from "../data.json";

export default class Skillsection extends Component {
  render() {
    return (
      <div>
        <Element name="Skills" />
        <Fullpage>
          <h3>{data.section[1].title}</h3>
          <div className="row">
            {data.section[1].item.map(eachkey => {
              return <SkillCarts skill={eachkey} />;
            })}
          </div>
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
        </Fullpage>
      </div>
    );
  }
}
