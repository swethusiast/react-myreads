import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from './List';
import * as BooksAPI from './../../BooksAPI';
import PropTypes from 'prop-types';
export default class Home extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    };
    componentDidMount() {
        this.getAllBooks();
    }
    getAllBooks = async () => {
        try {
            let allBooks = await BooksAPI.getAll();
            console.log(allBooks);
            this.filterBooks(allBooks);
        } catch (err) {
            alert(err); // TypeError: failed to fetch
        }
    };
    updateBook = async (book, shelf) => {
        let update = await this.props.updateBookShelf(book, shelf);
        if (update) {
            this.getAllBooks();
        }
    };
    filterBooks = (books) => {
        let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
        let wantToRead = books.filter((book) => book.shelf === 'wantToRead');
        let read = books.filter((book) => book.shelf === 'read');
        this.setState({
            currentlyReading,
            wantToRead,
            read,
        });
    };
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <List {...this.state} updateBook={this.updateBook} />
                </div>
                <Link to="/search" className="open-search">
                    <button>Add a book</button>
                </Link>
            </div>
        );
    }
}
Home.propTypes = {
    updateBookShelf: PropTypes.func.isRequired,
};
