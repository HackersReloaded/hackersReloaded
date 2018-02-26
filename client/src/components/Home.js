import React from "react";

 class Home extends React.Component {

  render() {

    return (
      <div>
         <h2 id="m-tools">{this.props.tools}</h2>
         <img id="m-image" src="Tools.jpg"/>
         <p id="headertest">Id:{this.props.id}</p>
         <br/>
         <div className="col-xs-20 col -xs-offset-5">
           <p>{this.props.quantity}</p>
           </div>
         <p>{this.props.description}</p>
      </div>
    );
  }
};
export default Home;
