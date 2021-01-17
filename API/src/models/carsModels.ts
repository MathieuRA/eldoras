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
  sponsorship: {
    type: Number,
    required: 'Un nombre de parrainage est requis',
  },
  title: {
    type: String,
    required: 'Un titre est obligatoire',
  },
})
