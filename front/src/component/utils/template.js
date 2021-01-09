import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCar,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'

import React from 'react'

import { elastic as Menu } from 'react-burger-menu'

import Tooltips from './Tooltips'

import './template.css'
import './Menu.css'

export const BackgroundImg = ({ alt, img }) => (
  <img
    draggable={false}
    className={'fullScreenImg'}
    src={`./assets/img/${img}`}
    alt={alt}
  />
)

export const Section = ({ children, section }) => (
  <section className={`fullScreen ${section}`}>
    {children}
  </section>
)

export const Filter = ({ float, rotate, right, width }) => (
  <div
    className={`filter`}
    style={{
      width: width + '%',
      float: float,
      right: right + '%',
      transform: `rotateZ(${rotate}deg)`,
    }}
  ></div>
)

export const MainMenu = ({ children }) => (
  <nav className={'menu'}>
    <ul className='menuContainer'>
      <li>
        <div>
          <Menu width={200} pageWrapId={'wrapId'}>
            <Link link={'accueil'}>Accueil</Link>
            <Link link={'a-propos'}>A Propos</Link>
            <Link link={'nous-rejoindre'}>
              Nous rejoindre
            </Link>
            <Tooltips content={'Bientôt disponible'}>
              <Link disabled>Actualité</Link>
            </Tooltips>
            <Tooltips content={'Bientôt disponible'}>
              <Link disabled>Forum</Link>
            </Tooltips>
            <Tooltips content={'Bientôt disponible'}>
              <Link disabled>Boutique</Link>
            </Tooltips>
          </Menu>
        </div>
      </li>
      <li className='titleMenu'>ELDORAS</li>
      <li>
        <div className='rowButtonLink'>
          <Tooltips content={'Bientôt disponible'}>
            <Link button disabled>
              <FontAwesomeIcon icon={faCar} size={'2x'} />
            </Link>
          </Tooltips>
          <Tooltips content={'Bientôt disponible'}>
            <Link button disabled>
              <FontAwesomeIcon
                icon={faNewspaper}
                size={'2x'}
              />
            </Link>
          </Tooltips>
        </div>
      </li>
    </ul>
  </nav>
)

export const Link = ({
  children,
  disabled = false,
  dark = false,
  button = false,
  link,
  newTab = false,
}) => {
  const handleClick = () => {
    if (disabled) {
      return
    }
    if (newTab) {
      return window.open(`https://www.${link}`, '_blank')
    }

    window.location.hash = link
  }
  let style = 'menu-item'
  if (disabled) {
    style += ' disabled'
  }
  if (button) {
    style += ' buttonLink'
  }
  if (dark) {
    style += ' darkButton'
  }
  return (
    <p className={style} onClick={handleClick}>
      <span>{children}</span>
    </p>
  )
}
