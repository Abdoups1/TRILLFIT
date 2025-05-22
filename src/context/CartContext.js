import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => { const [cart, setCart] = useState(() => { const saved = localStorage.getItem("trillfit_cart"); return saved ? JSON.parse(saved) : []; });

useEffect(() => { localStorage.setItem("trillfit_cart", JSON.stringify(cart)); }, [cart]);

const addToCart = (product) => { setCart((prev) => { const item = prev.find((i) => i.id === product.id); if (item) { return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)); } return [...prev, { ...product, quantity: 1 }]; }); };

const removeFromCart = (id) => { setCart((prev) => prev.filter((item) => item.id !== id)); };

const updateQuantity = (id, amount) => { setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + amount } : item)) ); };

return ( <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}> {children} </CartContext.Provider> ); };
