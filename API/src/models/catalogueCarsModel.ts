'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default new Schema({
  categories: {
    type: [String],
    required: 'Au moin une categorie est obligatoire',
  },
  creationDate: {
    type: Number,
    default: Date.now(),
  },
  img: {
    type: String,
    required: 'Une image est obligatoire',
  },
  price: {
    type: Number,
    required: 'Un prix est requis',
  },
  title: {
    type: String,
    required: 'Un titre est obligatoire',
  },
})
