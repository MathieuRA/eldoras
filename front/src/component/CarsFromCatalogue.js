import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { filter, includes, isEmpty } from 'lodash'

import FilterCars from './utils/FilterCars'

import {
  BackgroundImg,
  Filter,
  Section,
} from './utils/template'

import CarFromCatalogue from './CarFromCatalogue'

import { Spinner } from 'react-bootstrap'

import './CarsFromCatalogue.css'
import './spinner.css'

const CarsFromCatalogue = ({ isMobile }) => {
  const [allCars, setAllCars] = useState(null)
  const [cars, setCars] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:1251/catalogueCars')
      .then(response => {
        setAllCars(response.data)
        setCars(response.data)
      })
  }, [])

  const setFilterCars = selectedCategories => {
    if (isEmpty(selectedCategories)) {
      setCars(allCars)
      return
    }

    setCars(
      filter(allCars, car =>
        car.categories.some(category =>
          includes(selectedCategories, category)
        )
      )
    )
  }
  return (
    <>
      <Section isMobile={isMobile} section={'cars'}>
        {cars == null ? (
          <div className={'spinner'}>
            <Spinner
              animation='border'
              role='status'
              variant='light'
              size={'xl'}
            >
              <span className='sr-only'>Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className={'carsShopContainer'}>
            <div className={'filterContainer'}>
              <FilterCars setFilter={setFilterCars} />
            </div>
            <div className={'carsContainer'}>
              {cars.map(car => (
                <CarFromCatalogue car={car} key={car._id} />
              ))}
            </div>
          </div>
        )}
        <BackgroundImg
          alt={'lossantos'}
          img={'bgHome.jpg'}
        />
        <Filter />
      </Section>
    </>
  )
}

export default CarsFromCatalogue
