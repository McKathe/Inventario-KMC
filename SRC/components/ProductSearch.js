import React, { useState } from 'react';
import './ProductSearch.css';

const ProductSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="product-search" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="product-search__input"
        placeholder="Search products..."
      />
      <button type="submit" className="product-search__button">Search</button>
    </form>
  );
};

export default ProductSearch;