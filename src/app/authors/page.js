'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';

export default function ViewAllAuthors() {
  const [authors, setAuthors] = useState([]);

  // grab firebaseKey from url
  const { user } = useAuth();

  // make call to API layer to get the data
  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheAuthors();
  }, []);

  console.log(authors);
  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authObj={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>
    </div>
  );
}
