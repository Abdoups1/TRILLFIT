import React, { useContext } from "react"; import { Link, useLocation } from "react-router-dom"; import { CartContext } from "../context/CartContext"; import "../styles/navbar.css";

const Navbar = () => { const { cart } = useContext(CartContext); const location = useLocation(); const count = cart.reduce((acc, item) => acc + item.quantity, 0);

return ( <nav className="navbar"> <div className="navbar-logo"> <Link to="/">TRILLFIT</Link> </div> <div className="navbar-links"> <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link> <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>Cart ({count})</Link> </div> </nav> ); };

export default Navbar;