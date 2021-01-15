'use strict'

import carsRoutes from './src/routes/carsRoutes'
import cors from 'cors'
import express from 'express'
import path from 'path'
import multer from 'multer'

const app = express()
const upload = multer({ dest: 'uploads/' })

const PORT = process.env.PORT || 1251

//app.use(express.static('public'))
app.use(cors())

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname +
//         '-' +
//         Date.now() +
//         path.extname(file.originalname)
//     )
//   },
// })

// app.post(
//   '/test',
//   upload.single('myImage'),
//   (req, res, next) => {
//     console.log(req['file'])
//   }
// )

carsRoutes(app)

app.listen(PORT, () => {
  console.log('Server started on port: ' + PORT)
})
