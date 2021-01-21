import React from 'react'
import { Alert, Card } from 'react-bootstrap'

const CarSponsorship = ({ car }) => {
  const { img, title, sponsorship } = car
  const newSrc = img.replace('public', '.')
  return (
    <Card
      style={{
        height: 'fit-content',
        width: '35rem',
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
          {sponsorship} parrainages
        </Alert>
      </Card.Body>
    </Card>
  )
}
export default CarSponsorship
