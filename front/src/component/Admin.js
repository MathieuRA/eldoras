import axios from 'axios'
import React, { useState } from 'react'

export default function Admin() {
  const [state, setState] = useState({})

  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('car', state.file)
    formData.append('category', e.target.category.value)
    formData.append('title', e.target.title.value)
    formData.append(
      'sponsorship',
      e.target.sponsorship.value
    )

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
    <form
      onSubmit={onFormSubmit}
      style={{ position: 'absolute', top: '50%' }}
    >
      <h1>Upload</h1>
      <input
        type='text'
        name='category'
        placeholder='category'
      />
      <input
        type='number'
        name='sponsorship'
        placeholder='sponsorship'
      />
      <input type='text' name='title' placeholder='title' />
      <input type='file' name='car' onChange={onChange} />
      <button type='submit'>Upload</button>
    </form>
  )
}
