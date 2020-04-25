import React, { Component } from 'react';
import { Books } from '../Shared/Books';
import { SearchBar } from './SearchBar';
import PropTypes from 'prop-types';

export default class Search extends Component {
    updateBook = async (book, shelf) => {
        let update = await this.props.updateBookShelf(book, shelf);
        if (update) {
            this.getAllBooks();
        }
    };
    render() {
        return (
            <div className="search-books">
                <SearchBar />
                <div className="search-books-results">
                    <Books />
                </div>
            </div>
        );
    }
}
Search.propTypes = {
    updateBookShelf: PropTypes.func.isRequired,
};
