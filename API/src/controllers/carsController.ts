'use strict'

import { Request, Response } from 'express'
import mongoose from 'mongoose'

import carsModel from '../models/carsModels'

const Cars = mongoose.model('cars', carsModel)

export const addCar = (req: Request, res: Response) => {
  try {
    const { category, title, sponsorship } = req.body
    const body = {
      img: req['file'].path,
      category,
      title,
      sponsorship,
    }

    const car = new Cars(body)

    car.save((err, data) => {
      if (err) {
        res.status(403)
        res.send(err)
        throw err
      }
      res.status(201).json(data)
    })
  } catch (error) {
    res.status(403).json({ message: 'Non autorisé' })
  }
}
