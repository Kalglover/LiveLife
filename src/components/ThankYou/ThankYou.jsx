import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankYou.css';  

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cardHolder = location.state?.cardHolder || 'Guest';

  const handleContinueShopping = () => {
    navigate('/');  // Navigate back to the homepage
  };

  return (
    <div className="thank-you-container">
      <h1>Thank you for your Purchase</h1>
      <p>Your payment has been processed, <strong>{cardHolder}</strong>.</p>
      <button onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default ThankYou;
