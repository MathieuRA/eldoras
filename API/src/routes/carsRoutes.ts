'use strict'

import multer from '../middleware/multer'

import {
  addCar,
  getAllCar,
} from '../controllers/carsController'

const carsRoutes = (app: any): void => {
  app.route('/car').post(multer, addCar)
  app.route('/cars').get(getAllCar)
}

export default carsRoutes
