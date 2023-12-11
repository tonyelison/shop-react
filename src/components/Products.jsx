import { useState, useEffect } from 'react';
import http from '../services/http';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http.get('products').then((data) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <li key={product._id}>
              {product.name}
              <br />
              {product.description}
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Products;
