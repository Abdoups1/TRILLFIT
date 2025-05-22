import React from "react";
import "../styles/home.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="TRILLFIT Logo" className="logo" />
      <h1>Welcome to TRILLFIT</h1>
      <p>
        Your go-to store for modern streetwear made with passion and style.
        Discover high-quality apparel tailored for bold, expressive individuals
        like you.
      </p>
      <Link to="/products">
        <button className="shop-button">Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;