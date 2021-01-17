import React from 'react'

import Admin from './Admin'
import CarShop from './CarShop'
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
      {currentRoute === 'carShop' && (
        <CarShop isMobile={isMobile} />
      )}
      {currentRoute === 'admin' && <Admin />}
    </>
  )
}
export default Body
