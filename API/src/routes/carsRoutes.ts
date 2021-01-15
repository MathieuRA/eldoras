'use strict'

import multer from '../middleware/multer'

import { addCar } from '../controllers/carsController'

const carsRoutes = (app: any): void => {
  app.route('/car').post(multer, addCar)
}

export default carsRoutes
