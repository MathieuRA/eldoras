'use strict'

import multer from '../middleware/multer'

import {
  addSponsorshipCar,
  deleteSponsorShipCar,
  updateSponsorshipCar,
  getAllCarsFromCatalogue,
  getAllSponsorshipCars,
  addCatalogueCar,
} from '../controllers'

const carsRoutes = (app: any): void => {
  app
    .route('/sponsorshipCar')
    .post(multer, addSponsorshipCar)
  app.route('/sponsorshipCars').get(getAllSponsorshipCars)
  app
    .route('/sponsorshipCar/:id')
    .delete(deleteSponsorShipCar)
    .put(multer, updateSponsorshipCar)
  app.route('/catalogueCar').post(multer, addCatalogueCar)
  app.route('/catalogueCars').get(getAllCarsFromCatalogue)
}

export default carsRoutes
