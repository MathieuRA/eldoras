import axios from 'axios'
import { isEmpty, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const CONFIGHTTP = {
  headers: {
    'content-type': 'multipart/form-data',
  },
}

const callCategories = setCategories => {
  axios
    .get('http://localhost:1251/categories')
    .then(response => setCategories(response.data))
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
    await axios.delete(
      `http://localhost:1251/category/${id}`
    )
    callCategories(setCategories)
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
    callCategories(setCategories)
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
    callCategories(setCategories)
  }, [])

  const refresh = () => callCategories(setCategories)

  return (
    !isEmpty(categories) &&
    map(categories, category => (
      <CategoryInput
        category={category}
        refresh={refresh}
      />
    ))
  )
}

const CategoryInput = ({ category, refresh }) => {
  const [editing, setEditing] = useState(false)

  const handleEdit = e => {
    e.preventDefault()
    const editCategory = new FormData()
    editCategory.append('name', e.target.name.value)
    editCategory.append('_id', category._id)
    axios
      .put(
        `http://localhost:1251/category/${category._id}`,
        editCategory,
        CONFIGHTTP
      )
      .then(() => {
        setEditing(false)
        refresh()
      })
      .catch(err => console.error(err))
  }

  return editing ? (
    <form onSubmit={handleEdit}>
      <input
        type='text'
        placeholder={category.name}
        name='name'
      />
      <Button variant='warning' type='submit'>
        Modifier
      </Button>
      <Button
        variant='danger'
        onClick={() => setEditing(false)}
      >
        Annuler
      </Button>
    </form>
  ) : (
    <p onClick={() => setEditing(true)}>{category.name}</p>
  )
}
