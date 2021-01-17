'use strict'

import multer from '../middleware/multer'

import {
  addCategory,
  getAllCategories,
} from '../controllers/categoriesController'

const categoriesRoutes = (app: any): void => {
  app.route('/category').post(multer, addCategory)
  app.route('/categories').get(getAllCategories)
}

export default categoriesRoutes
