import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-card" style={{ position: "relative", border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      
      {/* New Arrival Badge */}
      {product.views < 10 && (
        <span style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "red",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px"
        }}>
          New Arrival
        </span>
      )}

      {/* Product Details */}
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
        <h3>{product.name}</h3>
        <p>{product.price} DZD</p>
      </Link>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;