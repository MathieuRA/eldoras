'use strict'

import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import mongoose, { CallbackError } from 'mongoose'

import mongoLog from './mongoLog'
import { carsRoutes, categoriesRoutes } from './src/routes'

const app = express()

const PORT = process.env.PORT || 1251
const { pseudo, password, personalLink, dbName } = mongoLog
const mongoUrl = `mongodb+srv://${pseudo}:${password}@${personalLink}/${dbName}?retryWrites=true&w=majority`

mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: CallbackError) => {
    if (err) throw err
    console.log('connected to mongoDB')
  }
)
//app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

categoriesRoutes(app)
carsRoutes(app)

app.listen(PORT, () => {
  console.log('Server started on port: ' + PORT)
})
