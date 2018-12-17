import React, { Component } from "react";

import data from "../data.json";

class downicon extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          transform: "transletY(-34px)",
          marginBottom: "45px",
          // position: "fixed",
          // bottom: "0",
          // alignItems: "center",
          cursor: "pointer",
          // textalign: "center",
          // padding: ".5rem 1rem"
        }}
      >
        <img style={{ maxWidth: "30px" }} src={data.icon.down} alt="" />
      </div>
    );
  }
}

export default downicon;
