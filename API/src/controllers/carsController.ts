'use strict'

import mongoose from 'mongoose'

import { Request, Response } from 'express'

import sponsorshipCarsModel from '../models/sponsorshipCarsModel'
import { ISponsorshipCar } from '../interfaces'

const Cars = mongoose.model(
  'sponsorshipCars',
  sponsorshipCarsModel
)

export const addCar = (req: Request, res: Response) => {
  try {
    const { categories, title, sponsorship } = req.body

    const body: ISponsorshipCar = {
      img: req['file'].path,
      categories: categories.split(','),
      title,
      sponsorship,
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
    res.status(403).json({ message: 'Non autorisé' })
  }
}

export const getAllCar = (req: Request, res: Response) => {
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
