'use strict'

import mongoose from 'mongoose'

import { Request, Response } from 'express'

import ICatalogueCar from '../interfaces/ICatalogueCar'

import { catalogueCarsModel } from '../models'

const Cars = mongoose.model(
  'catalogueCars',
  catalogueCarsModel
)

export const addCatalogueCar = (
  req: Request,
  res: Response
) => {
  try {
    const { categories, title, price } = req.body

    const body: ICatalogueCar = {
      img: req['file'].path,
      categories: categories.split(','),
      price,
      title,
    }

    const car = new Cars(body)

    car.save((err, data) => {
      if (err) {
        res.status(403)
        res.send(err)
        console.error(err)
        return
      }
      res.status(201).json(data)
    })
  } catch (error) {
    console.error(error)
    res.status(403).json({ message: 'Non autorisé' })
  }
}

export const getAllCarsFromCatalogue = (
  req: Request,
  res: Response
) => {
  Cars.find((err, data) => {
    if (err) {
      res.status(403)
      res.send(err)
      console.error(err)
      return
    }
    res.status(200).json(data)
  })
}
