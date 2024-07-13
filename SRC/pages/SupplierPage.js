import React from 'react';
import SupplierOrder from '../components/SupplierOrder';
import './SupplierPage.css';

const SupplierPage = () => {
  return (
    <div className="supplier-page">
      <h2 className="supplier-page__title">Supplier Orders</h2>
      <SupplierOrder />
    </div>
  );
};

export default SupplierPage;