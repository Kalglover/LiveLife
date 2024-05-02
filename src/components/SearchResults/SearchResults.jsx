import React from 'react';
import { useLocation } from "react-router-dom";
import './SearchResults.css';

const SearchResults = () => {
    const location = useLocation();
    const listItems = location.state;
    console.log(listItems.listItems);
    return (
        <div id="search-results-container">
            <h2 id="search-results-heading">Categories</h2>
            <div className="list-items-grid-container">
                {listItems['listItems'].map((item, index) => (
                    <div key={item.id || index} className="list-item-container"> {/* Use item.id if available, otherwise use index */}
                        <div className="list-item-image-container">
                            <img className="list-item-image" src={item.product_photo} alt={item.product_title} />
                        </div>

                        <div className="list-item-product-title-container">
                            <p>{item.product_title}</p>
                        </div>

                        <div>
                            <div className="list-item-info-container">
                                <div className="list-item-price-container">
                                    <p>Price:</p>
                                    <p>{item.product_price} {item.currency}</p>
                                </div>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
