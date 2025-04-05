'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function ProfileCard() {
  const { user } = useAuth();
  const { displayName, email, photoURL } = user;

  return (
    <div>
      {' '}
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={photoURL} alt={displayName} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{displayName}</Card.Title>
          <p className="card-text bold">{email}</p>
        </Card.Body>
      </Card>
    </div>
  );
}
