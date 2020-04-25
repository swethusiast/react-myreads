import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';
class BooksApp extends React.Component {
    updateBookShelf = async (book, shelf) => {
        try {
            await BooksAPI.update(book, shelf);
            console.log(book, shelf);
            return true;
        } catch (err) {
            alert(err); // TypeError: failed to fetch
        }
    };

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" render={() => <Home updateBookShelf={this.updateBookShelf} />} />
                <Route path="/search" render={() => <Search updateBookShelf={this.updateBookShelf} />} />
            </BrowserRouter>
        );
    }
}

export default BooksApp;
