'use strict'

import multer from '../middleware/multer'

import {
  addSponsorshipCar,
  getAllCarsFromCatalogue,
  getAllSponsorshipCars,
} from '../controllers'
import { addCatalogueCar } from '../controllers/catalogueCarsController'

const carsRoutes = (app: any): void => {
  app
    .route('/sponsorshipCar')
    .post(multer, addSponsorshipCar)
  app.route('/sponsorshipCars').get(getAllSponsorshipCars)
  app.route('/catalogueCar').post(multer, addCatalogueCar)
  app.route('/catalogueCars').get(getAllCarsFromCatalogue)
}

export default carsRoutes
