import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import Alert from '../alert/alert';
import './cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    setAlert({ type: 'success', message: 'Product removed from cart' });
  };

  if (cart.length === 0) return <div className="title">Cart is empty</div>;

  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <h2 className="title">Cart</h2>
      <div className="cart-container">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-img" />
            <h3 className="cart-name">{item.name}</h3>
            <p className="cart-price">Rs. {item.price.toFixed(2)}</p>
            <button className="cart-button" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
