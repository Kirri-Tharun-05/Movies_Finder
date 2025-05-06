import React from 'react';

const SearchBar = ({ query, setQuery }) => {
    return (
        <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
        />
    );
};

export default SearchBar;
