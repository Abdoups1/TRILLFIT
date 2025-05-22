import React, { useContext } from "react"; 
import { CartContext } from "../context/CartContext";
 import "../styles/cart.css";
 import hoodie from "../assets/HD.jpg"
 import tshirt from "../assets/TS.jpg"
 import dress from "../assets/DRS.jpg"
 import Wristband from "../assets/WB.jpg"
 import cap  from "../assets/CAP.jpg"
 import pants from "../assets/PTS.jpg"

const Cart = () => { const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

const handleCheckout = () => { alert("Checkout coming soon!"); };

return ( <div className="cart-container"> 
<h2>Your Cart</h2> {cart.length === 0 ? ( <p>Cart is empty.</p> ) : ( <> {cart.map((item) => ( <div key={item.id} className="cart-item"> 
    <img src={item.image} alt={item.name} /> <p>{item.name}</p> 
    <p>{item.price} ₫</p> <div> <button onClick={() => updateQuantity(item.id, -1)}
     disabled={item.quantity <= 1}>-</button> <span>{item.quantity}</span> <button onClick={() => updateQuantity(item.id, 1)}>+
     </button> 
     </div> <button onClick={() => removeFromCart(item.id)}>Remove</button> </div> ))} <h3>Total: {total} ₫</h3> <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button> </> )} </div> ); };

export default Cart;