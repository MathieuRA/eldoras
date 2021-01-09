import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import {
  BackgroundImg,
  Filter,
  Link,
  MainMenu,
  Section,
} from './utils/template'
import './home.css'

export default function Home() {
  return (
    <>
      <MainMenu></MainMenu>
      <main id={'wrapId'}>
        <Section section={'home'}>
          <BackgroundImg
            img={'bgHome.jpg'}
            alt={'lossantos'}
          />
          <Filter side={'right'} rotate={10}></Filter>
          <div className='containerHome'>
            <div className={'columnRS'}>
              <Link button dark>
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size={'2x'}
                />
              </Link>
              <Link button dark>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size={'2x'}
                />
              </Link>
              <Link button dark>
                <FontAwesomeIcon
                  icon={faTwitter}
                  size={'2x'}
                />
              </Link>
            </div>
            <div className={'textPresentation'}>
              <p>
                Le serveur <span>roleplay</span> dont vous
                rêviez
              </p>
            </div>
          </div>
        </Section>
      </main>
    </>
  )
}
