import React from 'react';
import CreditCardForm from '../CreditCardForm/CreditCardForm';

const CheckoutForm = () => {
  return (
    <div>
      <h1>Checkout Information</h1>
      {/* Other checkout related information */}
      <CreditCardForm />  // Include the Credit Card Form here
    </div>
  );
};

export default CheckoutForm;