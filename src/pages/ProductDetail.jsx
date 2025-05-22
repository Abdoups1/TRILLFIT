import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/data";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const selected = products.find((p) => p.id === parseInt(id));
    if (selected) {
      selected.views += 1;
      setProduct({ ...selected });
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-container">
      <button className="go-back" onClick={() => navigate(-1)}>← Go Back</button>

      <div className="image-section">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="info-section">
        <h2>{product.name}</h2>
        <p className="price">{product.price} đ</p>
        <p className="desc">Premium quality {product.name.toLowerCase()} made for Algerian streetwear culture.</p>

        <div className="size-selector">
          <span>Select Size:</span>
          <div className="sizes">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "size active" : "size"}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="add-to-cart" onClick={() => addToCart({ ...product, size: selectedSize })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;