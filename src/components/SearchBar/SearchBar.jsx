import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [listItems, setListItems] = useState(null);
    const navigate = useNavigate(); 

    const generateItems = (query) => {
        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=US&category_id=aps`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c78ae4dfe7msheb0295c0d413df2p16b2c0jsn7e73dbe83f69',
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then((response) => response.json())
            .then(data => {
                setListItems(data['data']['products']);
                navigate('/search-results', { state: { listItems: data['data']['products'] } }); // Redirect using useNavigate
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div id="search-bar">
            <input type="text" placeholder="Search" id="search-bar-text" onChange={(e) => setQuery(e.target.value)} />
            <button id="search-bar-button" onClick={() => generateItems(query)}>
                <img src="src/assets/icon _magnifying glass_.png" alt="Search" />
            </button>
        </div>
    );
}

export default SearchBar;