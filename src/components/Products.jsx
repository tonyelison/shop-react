import { useState, useEffect } from 'react';
import http from '../services/http';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http.get('products').then((data) => {
      setIsLoading(false);
      setProducts(data.products);
    });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="product-list">
        {isLoading
          ? 'Loading...'
          : products.map((product) => {
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
