import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import Admin, { Categorie } from './Admin'
import { Section } from './utils/template'

import './AdminContainer.css'

const AdminContainer = ({}) => {
  const [adminRoute, setAdminRoute] = useState('categorie')
  const selectedAdminRoute = eventKey =>
    setAdminRoute(eventKey)

  return (
    <Section section={'admin'}>
      <div className='adminContainer'>
        <Nav
          fill
          variant='tabs'
          defaultActiveKey='categorie'
          onSelect={selectedAdminRoute}
        >
          <Nav.Item>
            <Nav.Link eventKey='categorie'>
              Categorie
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='catalogue'>
              Catalogue
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='sponsorship'>
              Parrainage
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          {adminRoute === 'categorie' && <Categorie />}
          {adminRoute === 'catalogue' && <p>catalogue</p>}
          {adminRoute === 'sponsorship' && (
            <p>sponsorship</p>
          )}
        </div>
      </div>
    </Section>
  )
}

export default AdminContainer
