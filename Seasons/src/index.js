import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (result) => console.log(result),
//     (err) => console.error(err)
//   );

//   return (
//     <div>
//       <div>Hello World</div>
//       <SeasonsDisplay />
//     </div>
//   );
// };
var i = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    //State
    this.state = { lat: null, error: null };

    window.navigator.geolocation.getCurrentPosition(
      (result) => {
        this.setState({ lat: result.coords.latitude });
      },
      (err) => {
        this.setState({ error: err.message });
      }
    );
  }

  render() {
    console.log("Inside Render", i++);

    return (
      <div>
        <div>
          <h1>Latitude: {this.state.lat}</h1>
          <h6>Error: {this.state.error}</h6>
        </div>
        <SeasonsDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
