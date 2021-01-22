import React from 'react'

import { Alert, Card } from 'react-bootstrap'

export default function CarFromCatalogue({ car }) {
  const { img, price, title } = car

  const newSrc = img.replace('public', '.')

  return (
    <Card
      style={{
        height: 'fit-content',
        margin: 20,
        width: '18rem',
      }}
    >
      <Card.Img variant='top' src={newSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Alert
          style={{
            backgroundColor: '#b8b7ad',
            borderColor: '#000000',
            color: '#36383a',
          }}
        >
          {price} $
        </Alert>
      </Card.Body>
    </Card>
  )
}
