// src/components/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "cartItems"), (snapshot) => {
            setCartItems(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        });

        return () => unsubscribe();
    }, []);

    const addToCart = async (item) => {
        await addDoc(collection(db, "cartItems"), item);
    };

    const removeFromCart = (itemId) => {
        // Firestore delete logic
    };

    const clearCart = () => {
        // Firestore clear all items logic
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
