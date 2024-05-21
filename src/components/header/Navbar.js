import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css';

const Navbar = () => {
  const cartCount = useSelector(state => state.cart.length);

  return (
    <nav className="navbar">
      <h2>E-commerce</h2>
      <Link to="/">Products</Link>
      <Link to="/add-product">Add a Product</Link>
      <Link to="/cart">Cart<span className="cart-count">({cartCount})</span></Link>
    </nav>
  );
};

export default Navbar;
