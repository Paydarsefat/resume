import React, { Component } from "react";
import "./skillcards.css";

class skillCarts extends Component {
  render() {
    const { skill } = this.props;
    return (
        <div className="card">
          <div>
            <img className="image-wrapper" alt="" src={skill.content.image} />
          </div>
          <div>
            <h4 className="skill-wrapper">{skill.content.title}</h4>
          </div>
        </div>
    );
  }
}

export default skillCarts;
