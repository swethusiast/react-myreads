import React from 'react';
import { ShelfChanger } from './ShelfChanger';
import PropTypes from 'prop-types';

export const Book = ({ book, updateBook }) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 174,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                        }}
                    />
                    <ShelfChanger book={book} updateBook={updateBook} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors.map((author) => (
                        <span key={author}>
                            {author} <br />
                        </span>
                    ))}
                </div>
            </div>
        </li>
    );
};
Book.propTypes = {
    book: PropTypes.object.isRequired,
};
