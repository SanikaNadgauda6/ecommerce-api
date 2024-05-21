import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, deleteProduct, addToCart } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Alert from '../alert/alert';
import "./products.css";

const ProductList = () => {
  const [alert, setAlert] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    if (products.length === 0) { 
      fetch('https://my-json-server.typicode.com/SanikaNadgauda6/ecommerce-api/products')
        .then(res => res.json())
        .then(data => dispatch(setProducts(data)))
        .catch(error => setAlert({ type: 'error', message: error.message }));
    }
  }, [dispatch, products.length]); 
  console.log("These are the products", products);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    setAlert({ type: 'success', message: 'Product deleted successfully' });
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAlert({ type: 'success', message: 'Product added to cart' });
  };

  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <h2 className="title">Products Page</h2>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Rs. {product.price.toFixed(2)}</p>
            <p className="product-stock">Stock: {product.stock}</p>
            <Link to={`/products/${product.id}`} className="action-button">
              <FontAwesomeIcon icon={faPencil} />
            </Link>
            <button className="action-button" onClick={() => handleDelete(product.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="action-button" onClick={() => handleAddToCart(product)}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
