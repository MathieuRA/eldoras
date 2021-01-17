import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { filter, includes, isEmpty } from 'lodash'

import Car from './Car'
import FilterCars from './utils/FilterCars'

import {
  BackgroundImg,
  Filter,
  Section,
} from './utils/template'

import './CarShop.css'

const CarShop = ({ isMobile, currentRoute, setRoute }) => {
  const [cars, setCars] = useState(null)
  const [allCars, setAllCars] = useState(null)

  useEffect(() => {
    console.log('start requirest')
    axios
      .get('http://localhost:1251/cars')
      .then(response => {
        setCars(response.data)
        setAllCars(response.data)
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
      <Section section={'cars'} isMobile={isMobile}>
        <>
          {cars == null ? (
            <p>Chargement ..</p>
          ) : (
            <div className={'carsShopContainer'}>
              <div
                style={{
                  height: 'calc(100vh - 120px)',
                  padding: 15,
                  whiteSpace: 'nowrap',
                }}
              >
                <FilterCars setFilter={setFilterCars} />
              </div>
              <div className={'carsContainer'}>
                {cars.map(car => (
                  <Car car={car} key={car._id} />
                ))}
              </div>
            </div>
          )}
          <BackgroundImg
            img={'bgHome.jpg'}
            alt={'lossantos'}
          />
          <Filter />
        </>
      </Section>
    </>
  )
}

export default CarShop
