import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";

const App = () => {
  return (
    <div>
      <div>Hello World</div>
      <SeasonsDisplay/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
