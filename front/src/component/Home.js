import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import {
  BackgroundImg,
  Filter,
  Link,
  Section,
} from './utils/template'

import '../App.css'
import './Home.css'

export default function Home() {
  return (
    <>
      <Section section={'home'}>
        <BackgroundImg
          img={'bgHome.jpg'}
          alt={'lossantos'}
        />
        <Filter
          float={'right'}
          rotate={10}
          right={-10}
          width={75}
        />
        <div className='containerHome'>
          <div className={'columnRS'}>
            <Link button dark link={'facebook.com'} newTab>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size={'2x'}
              />
            </Link>
            <Link button dark link={'instagram.com'} newTab>
              <FontAwesomeIcon
                icon={faInstagram}
                size={'2x'}
              />
            </Link>
            <Link button dark link={'twitter.com'} newTab>
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
        <div className={'arrowDown'}>
          <Link button link={'a-propos'}>
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
