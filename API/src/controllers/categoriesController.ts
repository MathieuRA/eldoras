'use strict'

import mongoose from 'mongoose'

import { Request, Response } from 'express'

import categoriesModel from '../models/categoriesModel'
import { ICategory } from '../interfaces'

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

export const deleteCategory = (
  req: Request,
  res: Response
) => {
  Categories.findByIdAndDelete(
    { _id: req.params.id },
    undefined,
    (err, data) => {
      if (err) {
        res.status(404).send({ err })
        console.error(err)
        return
      }
      res.status(200).json(data)
    }
  )
}

export const getAllCategories = (
  req: Request,
  res: Response
) => {
  Categories.find((err, categories: ICategory[]) => {
    if (err) {
      res.status(403).send(err)
      console.log(err)
      return
    }
    res.status(200).json(categories)
  })
}

export const updateCategory = (
  req: Request,
  res: Response
) => {
  console.log(req.body)
}
