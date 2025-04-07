'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleAuthor } from '../../../../api/authorData';
import AuthForm from '../../../../components/forms/AuthorForm';

export default function EditAuth({ params }) {
  const [editItem, setEditItem] = useState({});
  // TODO: grab the firebasekey
  const { firebaseKey } = params;
  // TODO: make a call to the API to get the Auth data
  useEffect(() => {
    if (firebaseKey) {
      getSingleAuthor(firebaseKey).then(setEditItem);
    }
  }, [firebaseKey]);

  // TODO: pass object to form
  return <AuthForm obj={editItem} />;
}

EditAuth.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
