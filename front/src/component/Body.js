import React, { useEffect } from 'react'

import AdminContainer from './AdminContainer'
import CarsFromCatalogue from './CarsFromCatalogue'
import CarsSponsorship from './CarsSponsorship'
import HomeContainer from './HomeContainer'

const Body = ({ currentRoute, isMobile, setRoute }) => {
  useEffect(() => {
    const isAdmin = localStorage.getItem('admin')
    if (isAdmin === 'connectionnonsecurise') {
      setRoute('admin')
    }
  })
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
      {currentRoute === 'admin' && <AdminContainer />}
    </>
  )
}
export default Body
