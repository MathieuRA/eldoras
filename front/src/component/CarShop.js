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

const CarShop = ({ isMobile }) => {
  const [allCars, setAllCars] = useState(null)
  const [cars, setCars] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:1251/cars')
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
            alt={'lossantos'}
            img={'bgHome.jpg'}
          />
          <Filter />
        </>
      </Section>
    </>
  )
}

export default CarShop
