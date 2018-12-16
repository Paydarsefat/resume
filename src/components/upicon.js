import React, { Component } from "react";

import data from "../data.json";

class upicon extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "transletY(-10px)",
                    marginBottom: "10px"
                }}
            >
                <img style={{ maxWidth: "30px" }} src={data.icon.up} alt="" />
            </div>
        );
    }
}

export default upicon;