import React from 'react';
import ReactDOM from 'react-dom';
import DummieData from './database/dummie.data.js';
import $ from 'jquery';
import Home from './components/Home.js';

class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       list: []
     }
     this.getTools = this.getTools.bind(this);
   }

   getTools(){
     $.ajax({
       url:'/',
       method: 'GET',
       success: (results) => {
         this.setState({list:results});
       },
       error: (xhr, err) => {
         console.log('err', err);
       }
     })
   }
  render() {

    return (<div className="container">
        <div className="row">
          {list.map(item =>
            <Home item={this.state.list}/>)}
        </div>
      </div>)

   }
};
ReactDOM.render(<App />, document.getElementById("app"));
