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

import {
  BackgroundImg,
  Filter,
  Link,
  Section,
} from './utils/template'

import '../App.css'
import './About.css'
import { map } from 'lodash'

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

export default function About() {
  return (
    <>
      <Section section={'about'}>
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
        <div className={'rightSideAbout'}>
          <ul>
            {map(LIST_ABOUT, element => (
              <li key={element.id}>
                <span className={'logoList'}>
                  <FontAwesomeIcon
                    icon={element.logo}
                    size={'3x'}
                    color={element.color}
                  />
                </span>
                <p>{element.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={'arrowDown'}>
          <Link button>
            <FontAwesomeIcon
              icon={faChevronDown}
              size={'2x'}
            />
          </Link>
        </div>
      </Section>
    </>
  )
}
