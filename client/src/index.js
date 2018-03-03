import React from 'react';
import ReactDOM from 'react-dom';
import DummieData from '../../database/dummieData.js';

import Header from './components/Header.js';
import Search from './components/Search.js';
//import Details from './components/Details.js';

class App extends React.Component {

  render() {
    return (
    <div className="container">
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
