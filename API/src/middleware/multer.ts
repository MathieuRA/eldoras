'use strict'

import multer from 'multer'

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: File,
    callback: Function
  ) => {
    callback(null, './public/cars')
  },
  filename: (
    req: Request,
    file: File,
    callback: Function
  ) => {
    const name = file['originalname'].split(' ').join('_')
    const extension = MIME_TYPES[file['mimetype']]
    callback(null, name + Date.now() + '.' + extension)
  },
})

export default multer({ storage: storage }).single(
  'myImage'
)
