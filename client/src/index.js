import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Details from './components/Details.js';

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
          <Header header={"OneStopHardware"}>
            <h1 id="m-Text">The Only Place to Shop for your Favorite Tools!</h1>
          </Header>
        </div>
      </div>
      <div className="col-xs-20 col -xs-offset-5">
        <div className="col-xs-20 col -xs-offset-5">
          <Home initialId={user.id} quantity={user.quantity} description={user.description} price={user.price} picture={user.picture} tools={user.tools} greet={this.onGreet}/>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-20 col -xs-offset-5">
          <Details id={user.id} quantity={user.quantity} description={user.description} price={user.price} picture={user.picture} tools={user.tools}/>
        </div>
      </div>
    </div>);
  }
}
ReactDOM.render(<App/>, document.getElementById("app"));
