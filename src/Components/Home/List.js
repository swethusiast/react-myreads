import React from 'react';
import { Books } from '../Shared/Books';
import PropTypes from 'prop-types';
export const List = ({ currentlyReading, wantToRead, read, updateBook }) => {
    return (
        <div>
            {currentlyReading.length !== 0 ? (
                <Books title={'Currently Reading'} books={currentlyReading} updateBook={updateBook} />
            ) : (
                ''
            )}
            {wantToRead.length !== 0 ? <Books title={'Want To Read'} books={wantToRead} updateBook={updateBook} /> : ''}
            {read.length !== 0 ? <Books title={'Read'} books={read} updateBook={updateBook} /> : ''}
        </div>
    );
};

List.propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
};
