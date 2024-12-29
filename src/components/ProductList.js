import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';
import "./style.css"
import { fetchProducts } from '../api'; // Assuming '../api' is the correct path
<style rel='stylesheet' link="ProductList.css"></style>
const ProductList = () => {
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProducts(); // Fetch products from the API
        setProducts(response.data); // Update the products state
      } catch (err) {
        setError('Failed to fetch products'); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>; // Display loading message
  }

  if (error) {
    return <p>{error}</p>; // Display error message if an error occurred
  }

  return (
    <div>
      <div className="gallery">
      <h2>Shop Our Collection</h2>
      <div className="gallery-items">
        {products.map((product) => (
          <div key={product.id} className="gallery-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button className="get-started-btn"> Place Your Order</button><br></br>
          </div>
        ))}
      </div>
      <div className="gallery-items">
        <h2>Our Story And Journey So Far</h2>
       <p>Every great story has a little begining so is our story from the establishment of this fashion 
        house since 2016 uptil today we can only give God all the glory.<br></br>
        Christowonder Fashion House Started from  a single shop with just two workers who were apprentice at that time and over the 
        year it has now grown into a large establishment.
       </p>
        {/* all update about the business will be here*/}
      </div>
      <div className="gallery-items">
        {/* all blogs and latest update about the business will appear here*/}
      </div>

    </div>
  </div>



  );
};

export default ProductList;
