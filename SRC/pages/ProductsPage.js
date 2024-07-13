import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';
import ProductSearch from '../components/ProductSearch';
import './ProductsPage.css';

const ProductsPage = () => {
  const { data: products, loading, error } = useFetch('/api/products');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (query) => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="products-page">
      <h2 className="products-page__title">Products</h2>
      <ProductSearch onSearch={handleSearch} />
      <ProductList products={filteredProducts.length ? filteredProducts : products} />
    </div>
  );
};

export default ProductsPage;