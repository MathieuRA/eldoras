import axios from 'axios'
import { forEach, isEmpty, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

const SELECTEDCATEGORIES = {}

export default function FilterCars({ setFilter }) {
  const [categories, setCategories] = useState()
  useEffect(() => {
    axios
      .get('http://localhost:1251/categories')
      .then(resp => setCategories(resp.data))
  }, [])

  const handleChange = e => {
    if (!e.target.checked) {
      delete SELECTEDCATEGORIES[e.target.name]
      setFilter(SELECTEDCATEGORIES)
      return
    }
    SELECTEDCATEGORIES[e.target.name] = e.target.name
    setFilter(SELECTEDCATEGORIES)
  }

  const unselectAll = () => {
    forEach(SELECTEDCATEGORIES, category => {
      delete SELECTEDCATEGORIES[category]
      document.getElementById(category).checked = false
    })
    setFilter(SELECTEDCATEGORIES)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 5,
        }}
      >
        <ListGroup>
          {!isEmpty(SELECTEDCATEGORIES) && (
            <Button
              variant='outline-dark'
              onClick={unselectAll}
            >
              Tout décocher
            </Button>
          )}
          {map(categories, category => (
            <ListGroup.Item key={category._id}>
              <input
                type='checkbox'
                onChange={handleChange}
                name={category.name}
                id={category.name}
              />
              {' ' + category.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  )
}
