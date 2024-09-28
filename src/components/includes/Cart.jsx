import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([
        { name: "Product 1", price: 10.99, quantity: 1, image: "https://via.placeholder.com/100?text=Product+1" },
        { name: "Product 2", price: 15.49, quantity: 2, image: "https://via.placeholder.com/100?text=Product+2" },
        { name: "Product 3", price: 7.99, quantity: 3, image: "https://via.placeholder.com/100?text=Product+3" },
        { name: "Product 4", price: 12.99, quantity: 1, image: "https://via.placeholder.com/100?text=Product+4" },
        { name: "Product 5", price: 9.99, quantity: 2, image: "https://via.placeholder.com/100?text=Product+5" },
        { name: "Product 6", price: 20.00, quantity: 1, image: "https://via.placeholder.com/100?text=Product+6" },
        { name: "Product 7", price: 5.50, quantity: 4, image: "https://via.placeholder.com/100?text=Product+7" },
        { name: "Product 8", price: 25.75, quantity: 1, image: "https://via.placeholder.com/100?text=Product+8" }
    ]);

    // useEffect(() => {
    //     // Fetch cart items from local storage or API
    //     const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    //     setCartItems(items);
    // }, []);

    const removeItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const increaseQuantity = (index) => {
        const updatedCartItems = cartItems.map((item, i) => {
            if (i === index) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const decreaseQuantity = (index) => {
        const updatedCartItems = cartItems.map((item, i) => {
            if (i === index && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="item-details">
                                <h3 className="item-name">{item.name}</h3>
                                <p className="item-price">Price: ${item.price}</p>
                                <p className="item-quantity">Quantity: {item.quantity}</p>
                                <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <div className="buttons-container">
                                    <div className="quantity-buttons">
                                        <button onClick={() => increaseQuantity(index)} className="increase-button">+</button>
                                        <button onClick={() => decreaseQuantity(index)} className="decrease-button">-</button>
                                    </div>
                                    <button onClick={() => removeItem(index)} className="remove-button">Remove</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-total">
                <h3 className="total-price">Total: ${getTotalPrice()}</h3>
                <Link to="/checkout">
                    <button className="checkout-button">Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
