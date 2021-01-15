import React, { useState } from 'react'
import { Filter, Section } from './utils/template'

const axios = require('axios')

export default function CarShop() {
  const [state, setState] = useState({})

  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('myImage', state.file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    axios
      .post('http://localhost:1251/car', formData, config)
      .then(response => {
        alert('File uploaded')
      })
      .catch(error => {
        console.log({ error })
      })
  }

  const onChange = e => {
    setState({ file: e.target.files[0] })
  }

  return (
    <>
      <ul>
        <li>ok</li>
        <li>ok</li>
        <li>ok</li>
        <li>ok</li>
        <li>ok</li>
      </ul>
      <form onSubmit={onFormSubmit}>
        <h1>Upload</h1>
        <input
          type='file'
          name='myImage'
          onChange={onChange}
        />
        <button type='submit'>Upload</button>
      </form>
    </>
  )
}
