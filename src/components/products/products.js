import React, { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
    fetch('https://my-json-server.typicode.com/SanikaNadgauda6/ecommerce-api/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

    return (
        <>
            <h2>
                Products Page
            </h2>
            {/* {products.map((product) => (
                <p>{product}</p>
            ))} */}
        </>
    )
};

export default Products;
