import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCar,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

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

export const Section = ({
  children,
  section,
  isMobile,
}) => {
  const sizeScreen = isMobile ? 'mobile' : 'fullScreen'
  return (
    <section className={`${section} ${sizeScreen}`}>
      {children}
    </section>
  )
}

export const Filter = ({
  absolute,
  float,
  rotate,
  right,
  width,
  height = 150,
  top = -10,
}) => (
  <div
    className={`filter`}
    style={{
      width: width + '%',
      height: height + '%',
      float: float,
      right: right + '%',
      transform: `rotateZ(${rotate}deg)`,
      position: absolute ? 'absolute' : 'relative',
      top: top + '%',
    }}
  ></div>
)

export const MainMenu = ({
  currentRoute,
  isMobile,
  setRoute,
}) => {
  const responsive = {
    titleMenu: '',
  }

  isMobile
    ? (responsive.titleMenu = 'titleMenuMobile')
    : (responsive.titleMenu = 'titleMenu')

  return (
    <nav className={'menu'}>
      <ul className='menuContainer'>
        <li>
          <div>
            <Menu width={200} pageWrapId={'wrapId'}>
              <Link
                link={'accueil'}
                router={{
                  currentRoute: currentRoute,
                  setRoute: setRoute,
                }}
              >
                Accueil
              </Link>
              <Link
                link={'a-propos'}
                router={{
                  currentRoute: currentRoute,
                  setRoute: setRoute,
                }}
              >
                A Propos
              </Link>
              <Link
                link={'nous-rejoindre'}
                router={{
                  currentRoute: currentRoute,
                  setRoute: setRoute,
                }}
              >
                Nous rejoindre
              </Link>
              <Tooltips content={'Bientôt disponible'}>
                <Link
                  disabled
                  router={{
                    currentRoute: currentRoute,
                    setRoute: setRoute,
                    newRoute: 'news',
                  }}
                >
                  Actualité
                </Link>
              </Tooltips>
              <Tooltips content={'Bientôt disponible'}>
                <Link
                  disabled
                  router={{
                    currentRoute: currentRoute,
                    setRoute: setRoute,
                    newRoute: 'forums',
                  }}
                >
                  Forum
                </Link>
              </Tooltips>
              <Link
                router={{
                  currentRoute: currentRoute,
                  setRoute: setRoute,
                  newRoute: 'carShop',
                }}
              >
                Boutique
              </Link>
            </Menu>
          </div>
        </li>
        <li className={responsive.titleMenu}>ELDORAS</li>
        {!isMobile && (
          <li>
            <div className='rowButtonLink'>
              <Link
                button
                router={{
                  currentRoute: currentRoute,
                  setRoute: setRoute,
                  newRoute: 'carShop',
                }}
              >
                <FontAwesomeIcon icon={faCar} size={'2x'} />
              </Link>
              <Tooltips content={'Bientôt disponible'}>
                <Link
                  button
                  disabled
                  router={{
                    currentRoute: currentRoute,
                    setRoute: setRoute,
                    newRoute: 'news',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    size={'2x'}
                  />
                </Link>
              </Tooltips>
            </div>
          </li>
        )}
      </ul>
    </nav>
  )
}

export const Link = ({
  children,
  disabled = false,
  dark = false,
  button = false,
  link,
  newTab = false,
  router,
}) => {
  const handleClick = () => {
    if (disabled) {
      return
    }
    if (newTab) {
      return window.open(`https://www.${link}`, '_blank')
    }

    const { newRoute, setRoute, currentRoute } = router

    if (newRoute !== undefined) {
      window.location.hash = ''
      setRoute(newRoute)
      return
    }

    if (currentRoute !== 'home') {
      setTimeout(() => {
        window.location.hash = link
      }, 150)
      setRoute('home')
      return
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

Link.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  dark: PropTypes.bool,
  button: PropTypes.bool,
  link: PropTypes.string,
  newTab: PropTypes.bool,
  router: PropTypes.shape({
    currentRoute: PropTypes.string.isRequired,
    setRoute: PropTypes.func.isRequired,
    newRoute: PropTypes.string,
  }).isRequired,
}

export const Footer = () => {
  const currentDate = new Date()
  return (
    <footer>
      <p>
        Copyright 2020 - {currentDate.getFullYear()} | Tous
        droits réservés | Conception :{' '}
        <a
          href='https://mathieu-raisin.fr'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mathieu R
        </a>
      </p>
    </footer>
  )
}
