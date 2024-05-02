// src/components/ProductItem.js
import React from 'react';
import { useCart } from './CartContext';  // Adjust the import path as needed

const ProductItem = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image  // Make sure you have image in your product data
        });
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
