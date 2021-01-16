import React from 'react'
import Admin from './Admin'

import CarShop from './CarShop'
import HomeContainer from './HomeContainer'

const Body = ({ isMobile, setRoute, currentRoute }) => {
  return (
    <>
      {currentRoute === 'home' && (
        <HomeContainer
          isMobile={isMobile}
          setRoute={setRoute}
          currentRoute={currentRoute}
        />
      )}
      {currentRoute === 'carShop' && (
        <CarShop
          currentRoute={currentRoute}
          setRoute={setRoute}
        />
      )}
      {currentRoute === 'admin' && <Admin />}
    </>
  )
}
export default Body
