import axios from 'axios'

import React, { useEffect, useState } from 'react'
import Car from './Car'

import {
  BackgroundImg,
  Filter,
  Section,
} from './utils/template'

const CarShop = ({ isMobile, currentRoute, setRoute }) => {
  const [cars, setCars] = useState(null)
  useEffect(() => {
    console.log('start requirest')
    axios
      .get('http://localhost:1251/cars')
      .then(response => setCars(response.data))
  }, [])
  console.log(cars)
  return (
    <>
      <Section section={'cars'} isMobile={isMobile}>
        <>
          {cars == null ? (
            <p>Chargement ..</p>
          ) : (
            <div
              style={{
                position: 'absolute',
                zIndex: 10,
                top: 120,
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  height: 'calc(100vh - 120px)',
                  padding: 15,
                }}
              >
                Filter Container
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  height: 'calc(100vh - 105px',
                  overflow: 'scroll',
                }}
              >
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
