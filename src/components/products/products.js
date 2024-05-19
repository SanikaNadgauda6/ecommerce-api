import React, { useEffect, useState } from "react";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/SanikaNadgauda6/ecommerce-api/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h2 className="title">Products Page</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-stock">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
