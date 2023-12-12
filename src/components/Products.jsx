import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import http from '@/utils/http';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http.get('products').then((data) => {
      setIsLoading(false);
      setProducts(data);
    });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="product-list">
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          products.map((product) => {
            return (
              <li key={product._id}>
                <div>{product.name}</div>
                <div>{product.description}</div>
                <img src={'./' + product.image_url} alt={product.description} />
              </li>
            );
          })
        )}
      </div>
    </>
  );
};

export default Products;
