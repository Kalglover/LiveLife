import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard';
import Categories from './components/Categories/Categories';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import SearchResults from './components/SearchResults/SearchResults';
import Checkout from './components/Checkout/Checkout';  // Import the Checkout component
import CheckoutForm from './components/CheckoutForm/CheckoutForm.jsx';  // Ensure this path is correct
import ThankYou from './components/ThankYou/ThankYou';
import FormComponent from './components/FormComponent/FormComponent.jsx';  // Added FormComponent import
import Checkout from './components/Checkout/Checkout.jsx';
import Users from './components/Users/Users.jsx'; // Import the Users component
import CreditCardForm from './components/CreditCardForm/CreditCardForm.jsx';
import OrderItems from './components/OrderItems/OrderItems.jsx'; // Adjust the import path according to your file structure

function App() {
  const CartContext = createContext([]);
  const [cartItems, setCartItems] = useState([])
  
function App() {
    <div>
      <CartContext.Provider value={cartItems}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/checkout" element={<Checkout />} />  // Checkout now includes CreditCardForm
            <Route path= "/checkoutform" element={<CheckoutForm />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/OrderItems" element={<OrderItems />} />
            <Route path="/search-results" element={<SearchResults />} />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
