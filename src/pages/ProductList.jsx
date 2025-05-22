import React from "react";
import { products } from "../data/data";
import { Link } from "react-router-dom";
import "../styles/style.css";

const ProductList = () => {
  return (
    <div className="product-list-page">
      <h2 className="section-title">Explore Our Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="item-card">
            {product.views < 10 && <span className="badge">New Arrival</span>}
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} ₫</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="summer-collection">
  <h2>Summer Collection Coming Soon....</h2>
</div>
    </div>
  );
  
};

export default ProductList;