'use strict'

import {
  addCategory,
  deleteCategory,
  getAllCategories,
} from '../controllers'
import { updateCategory } from '../controllers/categoriesController'
import multer from '../middleware/multer'

const categoriesRoutes = (app: any): void => {
  app.route('/category').post(multer, addCategory)
  app
    .route('/category/:id')
    .delete(deleteCategory)
    .put(multer, updateCategory)
  app.route('/categories').get(getAllCategories)
}

export default categoriesRoutes
