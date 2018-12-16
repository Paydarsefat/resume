import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Skills extends Component {
    render() {
        return (
            <div>
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
                    Skills
        </Link>
            </div>
        );
    }
}
