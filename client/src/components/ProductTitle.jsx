import React from 'react';

class ProductTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      quantity: '',
      price:'',
      picture:''
    }
    this.add = this.add.bind(this);
    this.updateId = this.updateId.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.updatePicture = this.updatePicture.bind(this);

  }

  updateId(e) {
    this.setState({
      id: e.target.value
    })
  }

  updateQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  updatePrice(e){
    this.setState({
      price: e.target.value
    })
  }

 updatePicture(e){
   this.setState({
     picture: e.target.value
   })
 }
  add() {
    this.props.addItem(this.state.id, this.state.quantity, this.state.price, this.state.picture);
    this.setState({
      id: '',
      quantity: '',
      price: '',
      picture: ''
    })
  }

  render () {
    return (<div>
      Id: <input onChange={this.updateId} value={this.state.id}></input>
    <button onClick={this.add}>Add Id</button>
      <br />
      Quantity: <input onChange={this.updateQuantity} value={this.state.quantity}></input>
    <button onClick={this.add}>Add Quantity</button>
     <br />
     Price: <input onChange={this.updatePrice} value={this.state.price}></input>
   <button onClick={this.add}>Add Price</button>
   <br />
   Picture: <input onChange={this.updatePicture} value={this.state.picture}></input>
 <button onClick={this.add}>Add Picture</button>
    </div>);
  }
}

export default ProductTitle;
