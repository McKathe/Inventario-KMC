import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SupplierPage from './pages/SupplierPage';
import CustomerPage from './pages/CustomerPage';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/supplier" component={SupplierPage} />
          <Route path="/customer" component={CustomerPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;