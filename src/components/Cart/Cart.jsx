import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Cart = () => {
    let navigate = useNavigate();  // Use the useNavigate hook

    const handleCheckout = () => {
        navigate('/checkout');  // Navigate to the checkout page using navigate
    };

    return (
        <div id="cart-page-container">
            <div id="cart-container">
                <div id="cart-container-header">
                    <p>Shopping Cart</p>
                    <div id="cart-header">
                        <button>Deselect all items</button>
                        <p>Price</p>
                    </div>
                </div>

                <div className="cart-body">
                    <div>
                        <img src="https://th.bing.com/th/id/OPHS.qpHPDZmEOndArw474C474?w=200&h=150&rs=1&o=5&dpr=1.3&pid=21.1" alt="Product Image" />

                        <div className="cart-item-name-container">
                            <p>Skechers Men's Summits High Range Hands Free Slip-in Sneaker</p>
                        </div>
                    </div>
                    <p>$75.00</p>
                </div>
            </div>

            <div>
                <div id="checkout-container">
                    <p>Total Price [1 item]: $75.00</p>
                    <button id="checkout-button" onClick={handleCheckout}>Proceed to checkout</button>
                </div>

                <div id="recommended-container">
                    <div>

                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
