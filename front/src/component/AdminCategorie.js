import axios from 'axios'
import { isEmpty, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { apiCallGet, EditInput } from './utils'
import { apiCallDelete } from './utils/callApi'

const CONFIGHTTP = {
  headers: {
    'content-type': 'multipart/form-data',
  },
}

export const AddCategory = () => {
  const onNewCategory = e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('category', e.target.category.value)

    axios
      .post(
        'http://localhost:1251/category',
        formData,
        CONFIGHTTP
      )
      .then(response => {
        alert('categorie added uploaded')
      })
      .catch(error => {
        console.log({ error })
      })
  }

  return (
    <form onSubmit={onNewCategory}>
      <input
        type='text'
        name='category'
        placeholder='nouvelle catégorie'
      />
      <button type='submit'>Envoyer</button>
    </form>
  )
}

const handleDelete = async (id, setCategories) => {
  try {
    await apiCallDelete(
      id,
      setCategories,
      'categories',
      'category'
    )
    return 'success'
  } catch (error) {
    return 'error'
  }
}
export const DeleteCategory = () => {
  const [categories, setCategories] = useState()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    apiCallGet(setCategories, 'categories')
  }, [])

  return isEmpty(categories) ? (
    <p>Chargement ...</p>
  ) : (
    <>
      {error && (
        <Alert variant='danger'>
          La suppression à échouer
        </Alert>
      )}
      {success && (
        <Alert variant='success'>Catégorie supprimer</Alert>
      )}
      {map(categories, category => (
        <p key={category._id}>
          {category.name}{' '}
          <Button
            variant='danger'
            onClick={() =>
              handleDelete(
                category._id,
                setCategories
              ).then(resp => {
                resp === 'error'
                  ? setError(true)
                  : setSuccess(true)
              })
            }
          >
            X
          </Button>
        </p>
      ))}
    </>
  )
}

export const EditCategory = () => {
  const [categories, setCategories] = useState()

  useEffect(() => {
    apiCallGet(setCategories, 'categories')
  }, [])

  return (
    !isEmpty(categories) &&
    map(categories, category => (
      <EditInput
        item={category}
        refresh={setCategories}
        type={'category'}
      />
    ))
  )
}
