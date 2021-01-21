'use strict'

import mongoose from 'mongoose'

import { Request, Response } from 'express'

import sponsorshipCarsModel from '../models/sponsorshipCarsModel'
import { ISponsorshipCar } from '../interfaces'

const Cars = mongoose.model(
  'sponsorshipCars',
  sponsorshipCarsModel
)

export const addSponsorshipCar = (
  req: Request,
  res: Response
) => {
  try {
    const { categories, title } = req.body

    const body: ISponsorshipCar = {
      img: req['file'].path,
      categories: categories.split(','),
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
    res.status(403).json({ message: 'Non autorisé' })
  }
}

export const getAllSponsorshipCars = (
  req: Request,
  res: Response
) => {
  Cars.find((err, data: ISponsorshipCar[]) => {
    if (err) {
      res.status(403)
      res.send(err)
      console.error(err)
      return
    }
    res.status(200).json(data)
  })
}
