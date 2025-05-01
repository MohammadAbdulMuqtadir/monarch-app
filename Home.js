import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-grid">
      {products.map(prod => <ProductCard key={prod._id} product={prod} />)}
    </div>
  );
};

export default Home;
