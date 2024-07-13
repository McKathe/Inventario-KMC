import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = ({ onSubmit }) => {
  const [order, setOrder] = useState({
    product: '',
    quantity: '',
    type: 'supplier', // or 'customer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(order);
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div className="order-form__group">
        <label htmlFor="product" className="order-form__label">Product</label>
        <input
          type="text"
          name="product"
          value={order.product}
          onChange={handleChange}
          className="order-form__input"
          required
        />
      </div>
      <div className="order-form__group">
        <label htmlFor="quantity" className="order-form__label">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
          className="order-form__input"
          required
        />
      </div>
      <div className="order-form__group">
        <label htmlFor="type" className="order-form__label">Order Type</label>
        <select
          name="type"
          value={order.type}
          onChange={handleChange}
          className="order-form__select"
        >
          <option value="supplier">Supplier</option>
          <option value="customer">Customer</option>
        </select>
      </div>
      <button type="submit" className="order-form__button">Submit Order</button>
    </form>
  );
};

export default OrderForm;