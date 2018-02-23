import React from 'react';

const ProductItem = (props) => (
  <div>
    <span>{props.item.id}</span>
    <span>{props.item.quantity}</span>
    <span>{props.item.price}</span>
    <span>{props.item.picture}</span>
  </div>
)

export default ProductItem;
