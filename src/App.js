import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import ProductList from './components/productList/productList';
import ProductDetail from './components/ProductDetail/productdetail';
import Cart from './components/Cart/cart';
import ProductForm from './components/ProductForm/productForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;
