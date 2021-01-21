import axios from 'axios'
import { isEmpty, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

import CarSponsorship from './CarSponsorship'
import { getMounth } from './utils/dateFormater'
import {
  BackgroundImg,
  Filter,
  Section,
} from './utils/template'

const CarsSponsorship = ({ isMobile }) => {
  const [cars, setCars] = useState()
  useEffect(() => {
    axios
      .get('http://localhost:1251/sponsorshipCars')
      .then(response => setCars(response.data))
  }, [])

  return (
    <>
      <Section isMobile={isMobile} section={'cars'}>
        <>
          {!isEmpty(cars) ? (
            <div
              style={{
                position: 'absolute',
                zIndex: 10,
                top: 140,
                display: 'flex',
                width: '100%',
                height: 'calc(100vh - 300px)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  margin: 'auto',
                }}
              >
                <h2
                  style={{
                    width: '90%',
                    margin: 'auto auto 40px auto',
                    color: '#b8b7ad',
                    borderBottom: '1px solid #b8b7ad',
                    padding: 15,
                  }}
                >
                  Véhicules du mois de {getMounth()}
                </h2>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  {map(cars, car => (
                    <CarSponsorship
                      car={car}
                      key={car.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                position: 'absolute',
                zIndex: 10,
                top: '45%',
                left: '45%',
              }}
            >
              <Spinner
                animation='border'
                role='status'
                variant='light'
                size={'xl'}
              >
                <span className='sr-only'>Loading...</span>
              </Spinner>
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

export default CarsSponsorship
