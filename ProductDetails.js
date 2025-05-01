import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        const found = res.data.find(p => p._id === id);
        setProduct(found);
      });
  }, [id]);

  return product ? (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  ) : <p>Loading...</p>;
};

export default ProductDetails;
