import axios from 'axios'

import React, { useEffect, useState } from 'react'

import { forEach, map } from 'lodash'
import {
  AddCategory,
  DeleteCategory,
  EditCategory,
} from './AdminCategorie'
import { Button } from 'react-bootstrap'

function Admin() {
  const [categories, setCategories] = useState()
  const [state, setState] = useState({})

  useEffect(() => {
    axios
      .get('http://localhost:1251/categories')
      .then(response => setCategories(response.data))
  }, [])

  // New car
  const onFormSubmit = e => {
    e.preventDefault()

    const selectedOptions = []

    forEach(e.target.categories.options, option => {
      if (option.selected) {
        selectedOptions.push(option.value)
      }
    })

    const formData = new FormData()
    formData.append('car', state.file)
    formData.append('categories', selectedOptions)
    formData.append('title', e.target.title.value)
    formData.append('price', e.target.price?.value)

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    axios
      .post(
        'http://localhost:1251/catalogueCar',
        formData,
        config
      )
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

  const handleSelectedCategories = e => {
    console.log(e.target.value)
  }

  return (
    <div style={{ position: 'absolute', top: '50%' }}>
      <form onSubmit={onFormSubmit}>
        <h1>Upload</h1>
        <small>CTRL pour plusieur choix</small>
        <select
          multiple
          name='categories'
          onChange={handleSelectedCategories}
        >
          {map(categories, category => (
            <option key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type='number'
          name='price'
          placeholder='price'
        />
        <input
          type='text'
          name='title'
          placeholder='title'
        />
        <input type='file' name='car' onChange={onChange} />
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}

export const Categorie = () => {
  const [categoryRoute, setCategoryRoute] = useState('add')

  return (
    <>
      <Button
        disabled={categoryRoute === 'add'}
        variant='success'
        onClick={() => setCategoryRoute('add')}
      >
        Nouvelle catégorie
      </Button>
      <Button
        disabled={categoryRoute === 'edit'}
        variant='warning'
        onClick={() => setCategoryRoute('edit')}
      >
        Modifier une catégorie
      </Button>
      <Button
        disabled={categoryRoute === 'delete'}
        variant='danger'
        onClick={() => setCategoryRoute('delete')}
      >
        Supprimer une catégorie
      </Button>
      {categoryRoute === 'add' && <AddCategory />}
      {categoryRoute === 'edit' && <EditCategory />}
      {categoryRoute === 'delete' && <DeleteCategory />}
    </>
  )
}
