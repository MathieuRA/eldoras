'use strict'

import mongoose from 'mongoose'

import { Request, Response } from 'express'

import categoriesModel from '../models/categoriesModel'
import ICatalogueCar from '../interfaces/ICatalogueCar'

const Categories = mongoose.model(
  'categories',
  categoriesModel
)

export const addCategory = (
  req: Request,
  res: Response
) => {
  try {
    const category = new Categories({
      name: req.body.category,
    })

    category.save((err, data) => {
      if (err) {
        res.status(403).send(data)
        console.error(err)
        return
      }
      res.status(201).json(data)
    })
  } catch (error) {
    res.status(403).json({ message: 'Non autorisé' })
  }
}

export const getAllCategories = (
  req: Request,
  res: Response
) => {
  Categories.find((err, categories: ICatalogueCar[]) => {
    if (err) {
      res.status(403).send(err)
      console.log(err)
      return
    }
    res.status(200).json(categories)
  })
}
