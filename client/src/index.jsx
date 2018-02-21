import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import $ from 'jquery';
import ProductList from './components/ProductList.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import ProductTitle from './components/ProductTitle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.addProductItem = this.addProductItem.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }
  addProductItem(id, quantity, price, picture) {
    $.ajax({
      method: "POST",
      url: "/products",
      contentType: 'application/json',
      data: JSON.stringify({
        id: id,
        quantity: quantity,
        price: price,
        picture: picture
      })
    }).done(() => {
      this.getProducts();
    });
  }

  getProducts() {
    $.ajax({
      url: '/products',
      method: 'GET',
      success: (results) => {
        this.setState({list: results});
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    })
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (<div>
      <hi>ProductList</hi>
      <ProductInfo addItem={this.addProductItem}/>
      <ProductList list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
