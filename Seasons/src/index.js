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

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    window.navigator.geolocation.getCurrentPosition(
      (result) => console.log(result),
      (err) => console.error(err)
    );

    return (
      <div>
        <div>Hello World</div>
        <SeasonsDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
