import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, addToCart } from '../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import Alert from '../alert/alert';
import './productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) setProduct(foundProduct);
  }, [id, products]);

  const handleSave = () => {
    dispatch(updateProduct(product));
    setIsEditing(false);
    setAlert({ type: 'success', message: 'Product updated successfully' });
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAlert({ type: 'success', message: 'Product added to cart' });
  };

  if (!product) return <div>Product not found</div>;

  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="product-detail-container">
        <img src={product.img} alt={product.name} className="product-detail-img" />
        {isEditing ? (
          <>
            <input
              type="text"
              className="product-detail-input"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <textarea
              className="product-detail-textarea"
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
            <input
              type="number"
              className="product-detail-number"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
            />
            <button className="product-detail-button product-detail-button-save" onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <h3 className="product-detail-name">{product.name}</h3>
            <p className="product-detail-description">{product.description}</p>
            <p className="product-detail-price">Rs. {product.price.toFixed(2)}</p>
            <button className="product-detail-button product-detail-button-edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="product-detail-button" onClick={handleAddToCart}>Add to Cart</button>
          </>
        )}
        <button className="product-detail-button product-detail-button-back" onClick={() => navigate('/')}>Back to Products</button>
      </div>
    </>
  );
};

export default ProductDetail;
