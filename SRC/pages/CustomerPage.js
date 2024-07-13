import React from 'react';
import CustomerOrder from '../components/CustomerOrder';
import './CustomerPage.css';

const CustomerPage = () => {
  return (
    <div className="customer-page">
      <h2 className="customer-page__title">Customer Orders</h2>
      <CustomerOrder />
    </div>
  );
};

export default CustomerPage;