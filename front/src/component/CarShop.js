import React, { useState } from 'react'
import {
  BackgroundImg,
  Filter,
  Link,
  Section,
} from './utils/template'

const axios = require('axios')

const CarShop = ({ isMobile, currentRoute, setRoute }) => {
  return (
    <>
      <Section section={'cars'} isMobile={isMobile}>
        <>
          <BackgroundImg
            img={'bgHome.jpg'}
            alt={'lossantos'}
          />
          <Filter />
          <div
            style={{
              position: 'absolute',
              zIndex: 10,
              top: '50%',
            }}
          >
            <Link
              router={{
                currentRoute: currentRoute,
                newRoute: 'admin',
                setRoute: setRoute,
              }}
            >
              Admin
            </Link>
          </div>
        </>
      </Section>
    </>
  )
}

export default CarShop
