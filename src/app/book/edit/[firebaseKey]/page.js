'use client';

import React, { useEffect, useState } from 'react';
import { getSingleBook } from '@/api/bookData';
import BookForm from '@/components/forms/BookForm';
import PropTypes from 'prop-types';

export default function EditBook({ params }) {
  const [editItem, setEditItem] = useState({});
  // TODO: grab the firebasekey
  console.warn(params);
  console.log(typeof params === 'object');
  const { firebaseKey } = params;
  console.log(typeof firebaseKey === 'object');
  console.warn(firebaseKey);
  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleBook(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return <BookForm obj={editItem} />;
}

EditBook.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};

// reference
