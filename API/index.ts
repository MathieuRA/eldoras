'use strict'

import carsRoutes from './src/routes/carsRoutes'
import cors from 'cors'
import express from 'express'
import path from 'path'
import multer from 'multer'

const app = express()
const upload = multer({ dest: 'uploads/' })

const PORT = process.env.PORT || 1251

//app.use(express.static('public'))
app.use(cors())

carsRoutes(app)

app.listen(PORT, () => {
  console.log('Server started on port: ' + PORT)
})
