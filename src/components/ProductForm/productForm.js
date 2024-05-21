import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import Alert from '../alert/alert';
import './productForm.css';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    img: '',
  });
  const [alert, setAlert] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, price: parseFloat(product.price) }));
    setAlert({ type: 'success', message: 'Product added successfully' });
    setProduct({
      name: '',
      description: '',
      price: '',
      stock: '',
      img: '',
    });
  };

  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="product-form-container">
        <h2 className="product-form-title">Add Product</h2>
        <form className="product-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="product-form-input"
            placeholder="Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <textarea
            className="product-form-textarea"
            placeholder="Description"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
          <input
            type="number"
            className="product-form-input"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="number"
            className="product-form-input"
            placeholder="Stock"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          />
          <input
            type="text"
            className="product-form-input"
            placeholder="Image URL"
            value={product.img}
            onChange={(e) => setProduct({ ...product, img: e.target.value })}
          />
          <button className="product-form-button" type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
