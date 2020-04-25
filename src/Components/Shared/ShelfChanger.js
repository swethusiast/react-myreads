import React from 'react';
import PropTypes from 'prop-types';

export const ShelfChanger = ({ book, updateBook }) => {
    return (
        <div className="book-shelf-changer">
            <select value={book.shelf ? book.shelf : 'none'} onChange={(e) => updateBook(book, e.target.value)}>
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
};
ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
};
