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
  state = { lat: null, error: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (result) => this.setState({ lat: result.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  render() {
    console.log("Inside Render", i++);
    if (this.state.lat) return <SeasonsDisplay latitude={this.state.lat}></SeasonsDisplay>;
    else if (this.state.error) return <h1>Error: {this.state.error}</h1>;
    else return <h1>Loading...</h1>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
