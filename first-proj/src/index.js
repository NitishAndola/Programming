//Import and Manage Libraries
import React from "react";
import ReactDOM from "react-dom";

function buttonText() {
  var i = 0;
  var styleobj= {
 button: {
	color: "white"
}
};

  var msg= "Click me " + i + " times";
   setTimeout(function () {
    i++;
    msg="Click me " + i + " times";
  }, 5000);
  return msg;
}
//Create a React Component
const App = () => {
  //const buttonText = "Click me!";
  return (
    <div>
      <label class="label" for="name">
        User Name
      </label>
      <input id="name" />
      <button
        style={{ color: "white", backgroundColor: "green", marginLeft: "5px" }}
      >
        {buttonText()}
      </button>
    </div>
  );
};

//Export and show on browser
ReactDOM.render(<App />, document.querySelector("#root"));
