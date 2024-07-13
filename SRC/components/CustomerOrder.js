import React from 'react';
import OrderForm from './OrderForm';
import './CustomerOrder.css';

const CustomerOrder = () => {
  const handleOrderSubmit = (order) => {
    console.log('Customer Order Submitted:', order);
  };

  return (
    <div className="customer-order">
      <h2 className="customer-order__title">Orden de Cliente</h2>
      <OrderForm onSubmit={handleOrderSubmit} />
    </div>
  );
};

export default CustomerOrder;