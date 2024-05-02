import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // Ensure you have this CSS file in your project

const Checkout = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/api/creditcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardDetails),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate('/thank-you', { state: { cardHolder: cardDetails.cardHolder } });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          name="cardNumber"
          value={cardDetails.cardNumber}
          onChange={handleInputChange}
          type="text"
          placeholder="Card Number"
          required
        />
        <input
          name="cardHolder"
          value={cardDetails.cardHolder}
          onChange={handleInputChange}
          type="text"
          placeholder="Card Holder"
          required
        />
        <input
          name="expiryDate"
          value={cardDetails.expiryDate}
          onChange={handleInputChange}
          type="text"
          placeholder="Expiry Date"
          required
        />
        <input
          name="cvv"
          value={cardDetails.cvv}
          onChange={handleInputChange}
          type="text"
          placeholder="CVV"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
