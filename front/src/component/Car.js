import React from 'react'

import { Alert, Button, Card } from 'react-bootstrap'
export default function Car({ car }) {
  const { title, img, sponsorship } = car

  const newSrc = img.replace('public', '.')
  return (
    <Card
      style={{
        width: '18rem',
        height: 'fit-content',
        margin: 20,
      }}
    >
      <Card.Img variant='top' src={newSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Alert
          style={{
            color: '#36383a',
            backgroundColor: '#b8b7ad',
            borderColor: '#000000',
          }}
        >
          {sponsorship} parrainage{sponsorship > 1 && 's'}
        </Alert>
      </Card.Body>
    </Card>
  )
}
