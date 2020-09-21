import React, { Component } from "react";

import ImageMapEditor from "../components/imagemap/ImageMapEditor";
import FlowContainer from "./FlowContainer";

class App extends Component {
  render() {
    return (
      <div className="rde-main">
        <FlowContainer>
          <div className="rde-content">
            <ImageMapEditor />
          </div>
        </FlowContainer>
      </div>
    );
  }
}

export default App;
