import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SearchBar = ({ handleChange }) => {
    return (
        <div className="search-books-bar">
            <Link to="/" className="close-search">
                Close
            </Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Search by title or author"
                />
            </div>
        </div>
    );
};
SearchBar.propTypes = {
    handleChange: PropTypes.func.isRequired,
};
