import React, { useState } from 'react';

const Checkout = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardDetails),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error('error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default Checkout;

