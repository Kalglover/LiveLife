// Import necessary hooks from React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const CreditCardForm = () => {
    const [cardDetails, setCardDetails] = useState({
        userId: '',  
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    // useNavigate hook to redirect to another route
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCardDetails({
            ...cardDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/process-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardDetails)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            // Use navigate to redirect to the ThankYou page with the data
            navigate('/thank-you', { state: { user: result.user, orders: result.orders, items: result.items } });
        } catch (error) {
            console.error('Payment submission error:', error);
            // Handle errors, for example showing a message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleChange}
                placeholder="Card Number"
            />
            <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleChange}
                placeholder="Expiry Date (MM/YY)"
            />
            <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
                placeholder="CVV"
            />
            <button type="submit">Submit Payment</button>
        </form>
    );
};

export default CreditCardForm;
