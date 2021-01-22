import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBox,
  faCalendarCheck,
  faCannabis,
  faCar,
  faChevronDown,
  faRoad,
  faTools,
  faUsers,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons'

import { map } from 'lodash'

import {
  BackgroundImg,
  Filter,
  Link,
  Section,
} from './utils/template'

import '../App.css'
import './About.css'

const LIST_ABOUT = [
  {
    id: 1,
    color: '#a94b6d',
    logo: faBox,
    text: '10 à 64 slots',
  },
  {
    id: 2,
    color: '#1f99a9',
    logo: faCalendarCheck,
    text: 'Des supers événements',
  },
  {
    id: 3,
    color: '#ff7810',
    logo: faCar,
    text: 'Des véhicules moddés',
  },
  {
    id: 4,
    color: '#339e33',
    logo: faCannabis,
    text: '8 drogues différentes',
  },
  {
    id: 5,
    color: '#928b8b',
    logo: faRoad,
    text: 'Un mapping hors du commun',
  },
  {
    id: 6,
    color: 'black',
    logo: faUserSecret,
    text: 'Un serious RP',
  },
  {
    id: 7,
    color: '#4321bd',
    logo: faTools,
    text: 'Staff très actif',
  },
  {
    id: 8,
    color: '#65d4a8',
    logo: faUsers,
    text: 'Une communauté au top !',
  },
]

export default function About({
  currentRoute,
  isMobile,
  setRoute,
}) {
  const responsive = {
    rightSideAbout: {
      width: isMobile ? '100%' : '45%',
    },
    li: {
      display: isMobile ? 'block' : 'flex',
    },
    logoLi: {
      margin: isMobile ? 'auto' : '0 30px 0 0',
    },
    textLi: {
      textAlign: isMobile
        ? 'center'
        : '-webkit-match-parent',
    },
  }

  return (
    <>
      <Section section={'about'} isMobile={isMobile}>
        {!isMobile && (
          <>
            <BackgroundImg
              alt={'lossantos'}
              img={'bgAbout.jpg'}
            />
            <Filter
              float={'left'}
              rotate={10}
              right={10}
              width={34.6}
            />
            <div className={'textAbout'}>
              <span>Eldoras</span> est doté{' '}
              <span>d'énormement</span> de fonctionnalités !
            </div>
          </>
        )}
        <div
          className={'rightSideAbout'}
          style={{ ...responsive.rightSideAbout }}
        >
          <ul>
            {map(LIST_ABOUT, element => (
              <li
                key={element.id}
                style={{ ...responsive.li }}
              >
                <span
                  className={'logoList'}
                  style={{ ...responsive.logoLi }}
                >
                  <FontAwesomeIcon
                    color={element.color}
                    icon={element.logo}
                    size={'3x'}
                  />
                </span>
                <p style={{ ...responsive.textLi }}>
                  {element.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {!isMobile && (
          <div className={'arrowDown'}>
            <Link
              button
              link={'nous-rejoindre'}
              router={{
                currentRoute: currentRoute,
                setRoute: setRoute,
              }}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                size={'2x'}
              />
            </Link>
          </div>
        )}
      </Section>
    </>
  )
}
