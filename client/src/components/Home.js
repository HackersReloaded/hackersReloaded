/*import React from "react";

 class Home extends React.Component {
   constructor(props) {
     super();
     this.state = {
         id: props.initalId,
         status:0
     };
     setTimeout(() => {
       this.setState({
         status:3
       })
     },3000);

   }

   onSpecialDiscount() {
     this.setState({
       id: this.state.id +10
     });

     console.log(this.state)
   }
  render() {

    return (
      <div>
         <h2 id="m-tools">{this.props.tools}</h2>
         <img id="m-image" src="Tools.jpg"/>
         <p id="headertest">{this.state.id}</p>
         <p>Status: {this.state.status}</p>
         <br/>
           <p>{this.props.quantity}</p>
         <button onClick={() => this.onSpecialDiscount()} className="btn btn-primary">Special Discount!</button>
         <p>{this.props.description}</p>
         <button onClick={this.props.greet} className="btn btn-primary">Greeting!</button>
      </div>
    );
  }
};
export default Home;
