import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard';
import Categories from './components/Categories/Categories';
import Orders from './components/Orders/Orders.jsx';
import Cart from './components/Cart/Cart';
import SearchResults from './components/SearchResults/SearchResults';
import Checkout from './components/Checkout/Checkout.jsx';  // Import the Checkout component
import ThankYou from './components/ThankYou/ThankYou';
import Users from './components/Users/Users.jsx'; // Import the Users component
import OrderItems from './components/OrderItems/OrderItems.jsx';
import { CartProvider } from './components/CartContext.jsx'; 

function App() {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/order-items" element={<OrderItems />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
