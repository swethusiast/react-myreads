import React, { Component } from 'react';
import { Books } from '../Shared/Books';
import { SearchBar } from './SearchBar';
import PropTypes from 'prop-types';
import * as BooksAPI from './../../BooksAPI';

export default class Search extends Component {
    state = {
        searchResult: [],
    };
    updateBook = (book, shelf) => {
        this.props.updateBookShelf(book, shelf);
    };

    search = async (query) => {
        if (query.trim() !== '') {
            BooksAPI.search(query.trim())
                .then((res) => this.setState({ searchResult: res }))
                .catch((error) => console.log(error.message));
        }
    };

    render() {
        const { searchResult } = this.state;
        return (
            <div className="search-books">
                <SearchBar handleChange={this.search} />
                <div className="search-books-results">
                    {searchResult.length === 0 ? (
                        'Please search for a Book title or author.'
                    ) : (
                        <Books title={'Search Result'} books={searchResult} updateBook={this.updateBook} />
                    )}
                </div>
            </div>
        );
    }
}
Search.propTypes = {
    updateBookShelf: PropTypes.func.isRequired,
};
