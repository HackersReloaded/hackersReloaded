import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Search from './components/Search.js';
//import Details from './components/Details.js';

class App extends React.Component {
  onGreet() {
    alert("Welcome to the magical place of Tools!");
  }
  render() {
    var user = {
      id: 0,
      quantity: "Quantity:",
      description: "Description:",
      price: "Price:",
      picture: "Picture:",
      tools: "Tools:"
    };
    return (<div className="container">
      <div className="row">
        <div className="col-xs-20 col -xs-offset-5">
          <Header header={"OneStopHardware"}></Header>
        </div>
      </div>
      <Search />
    </div>);
  }
}
ReactDOM.render(<App/>, document.getElementById("app"));
