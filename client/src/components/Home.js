import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.tool.price
    };

  }
  onHotDeals() {
    this.setState({
      price: this.state.price * 1.0825
    });

  }

  render() {
    return (<div className="card">
          <div className="card text-white bg-success mb-3" style={{width: "18rem"}}>
            <img className="card-img-top" src="Toolkits.jpeg" alt="Card image cap"></img>
              <p className="card-text">{"Name: " + this.props.tool.name}</p>
          </div>
          <div className="card-body">
          <p className="card-text">{"Description: " + this.props.tool.description}</p>
            <p className="card-text">{"Quantity: " + this.props.tool.quantity}</p>
            <p className="card-text">{"Price: " + this.state.price}</p>
            <a href="https://www.homedepot.com/" className="btn btn-primary">More Options!</a>
            <hr />
             <button onClick={() => this.onHotDeals()} className="btn btn-danger">Hot Deals!</button>
        </div>
      </div>)


  }
};
export default Home;

