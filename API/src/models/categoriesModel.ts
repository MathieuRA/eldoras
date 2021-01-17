'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default new Schema({
  name: {
    type: String,
    required: 'le nom de la categorie est obligatoire',
  },
  creationDate: {
    type: Number,
    default: Date.now(),
  },
})
