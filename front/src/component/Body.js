import React from 'react'

import Admin from './Admin'
import CarsFromCatalogue from './CarsFromCatalogue'
import CarsSponsorship from './CarsSponsorship'
import HomeContainer from './HomeContainer'

const Body = ({ currentRoute, isMobile, setRoute }) => {
  return (
    <>
      {currentRoute === 'home' && (
        <HomeContainer
          currentRoute={currentRoute}
          isMobile={isMobile}
          setRoute={setRoute}
        />
      )}
      {currentRoute === 'carsFromCatalogue' && (
        <CarsFromCatalogue isMobile={isMobile} />
      )}
      {currentRoute === 'carsSponsorship' && (
        <CarsSponsorship isMobile={isMobile} />
      )}
      {currentRoute === 'admin' && <Admin />}
    </>
  )
}
export default Body
