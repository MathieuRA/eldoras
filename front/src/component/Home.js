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

export default function Home({ isMobile }) {
  const responsive = {
    containerHome: {
      transform: isMobile && 'none',
      position: isMobile && 'relative',
      paddingTop: isMobile && 90,
      paddingBottom: isMobile && 77
    },
    filter: {
      rotate: isMobile ? 0 : 10,
      right: isMobile ? 0 : -10,
      width: isMobile ? 100 : 75,
      top: isMobile ? 0 : -10,
      absolute: isMobile ? true : false
    }
  }

  const textPresentation = isMobile ? 'textPresentationMobile' : 'textPresentation'

  return (
    <>
      <Section section={'home'} isMobile={isMobile}>
        <BackgroundImg
          img={'bgHome.jpg'}
          alt={'lossantos'}
        />
        <Filter
          float={'right'}
          {...responsive.filter}
        />

        <div className='containerHome' style={{ ...responsive.containerHome }}>
          {!isMobile &&
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
          }
          <div className={textPresentation}>
            <p>
              Le serveur <span>roleplay</span> dont vous
              rêviez
            </p>
          </div>
        </div>
        {!isMobile &&
          <div className={'arrowDown'}>
            <Link button link={'a-propos'}>
              <FontAwesomeIcon
                icon={faChevronDown}
                size={'2x'}
              />
            </Link>
          </div>
        }
      </Section>
    </>
  )
}
