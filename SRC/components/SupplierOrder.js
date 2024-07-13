import React from 'react';
import OrderForm from './OrderForm';
import './SupplierOrder.css';

const SupplierOrder = () => {
  const handleOrderSubmit = (order) => {
    console.log('Supplier Order Submitted:', order);
  };

  return (
    <div className="supplier-order">
      <h2 className="supplier-order__title">Supplier Order</h2>
      <OrderForm onSubmit={handleOrderSubmit} />
    </div>
  );
};

export default SupplierOrder;