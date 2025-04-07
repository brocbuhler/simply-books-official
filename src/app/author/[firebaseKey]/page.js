'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { viewAuthorDetails } from '../../../api/mergedData';
import BookCard from '../../../components/BookCard';

export default function ViewAuthor({ params }) {
  const [authorDetails, setAuthorDetails] = useState({});
  // grab firebaseKey from url
  const { firebaseKey } = params;

  // make call to API layer to get the data
  const viewAuthorBooks = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    viewAuthorBooks();
  }, [firebaseKey]);

  console.warn(authorDetails.books);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        Author Email: <a href={`${authorDetails.email}`}>{authorDetails.email}</a>
      </div>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {Array.isArray(authorDetails.books) && authorDetails.books.length > 0 ? authorDetails.books.map((book) => <BookCard key={book.firebaseKey} bookObj={book} onUpdate={viewAuthorBooks} />) : <p>No books available</p>}
      </div>
    </div>
  );
}

ViewAuthor.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
