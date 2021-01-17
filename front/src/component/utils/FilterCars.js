import React from 'react'
import { ListGroup } from 'react-bootstrap'

const CATEGORIES = {}

export default function FilterCars({ setFilter }) {
  const handleChange = e => {
    if (!e.target.checked) {
      delete CATEGORIES[e.target.name]
      setFilter(CATEGORIES)
      return
    }
    CATEGORIES[e.target.name] = e.target.name
    setFilter(CATEGORIES)
  }
  return (
    <>
      <p>Filter par:</p>
      <div>
        <p>Catégorie</p>
        <ListGroup>
          <ListGroup.Item>
            <input
              type='checkbox'
              onChange={handleChange}
              name='Sportive'
            />{' '}
            Sportive
          </ListGroup.Item>
          <ListGroup.Item>
            <input
              type='checkbox'
              onChange={handleChange}
              name='SUV'
            />{' '}
            SUV
          </ListGroup.Item>
          <ListGroup.Item>
            <input
              type='checkbox'
              onChange={handleChange}
              name='Coupé'
            />{' '}
            Coupé
          </ListGroup.Item>
          <ListGroup.Item>
            <input
              type='checkbox'
              onChange={handleChange}
              name='Muscle'
            />{' '}
            Muscle{' '}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}
