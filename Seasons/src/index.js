import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = { lat: null, error: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (result) => this.setState({ lat: result.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  renderContent() {
    if (this.state.lat)
      return <SeasonsDisplay latitude={this.state.lat}></SeasonsDisplay>;
    else if (this.state.error) return <h1>Error: {this.state.error}</h1>;
    else return <Spinner text="Waiting for Location..." />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
