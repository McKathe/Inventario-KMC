import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h2 className="product-item__name">{product.name}</h2>
      <p className="product-item__category">Category: {product.category}</p>
      <p className="product-item__manufacturer">Manufacturer: {product.manufacturer}</p>
      <p className="product-item__stock">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductItem;