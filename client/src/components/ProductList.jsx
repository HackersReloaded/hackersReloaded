import React from 'react';
import ProductInfo from './ProductInfo.jsx'
const ProductList = (props) => (
  <div className="products">
    {props.list.map((item) => <ProductInfo item={item} key={item.id} />)}
  </div>
)

export default ProductList;
