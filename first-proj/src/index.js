//Import and Manage Libraries
import React from 'react';
import ReactDOM from 'react-dom'



//Create a React Component
const App=function(){
    return <h1>Hello World!</h1>
}


//Export and show on browser
ReactDOM.render(
    <App/>, document.querySelector('#root')
);