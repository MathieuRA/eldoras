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

export default function Home({
  currentRoute,
  isMobile,
  setRoute,
}) {
  const responsive = {
    containerHome: {
      paddingBottom: isMobile && 77,
      paddingTop: isMobile && 90,
      position: isMobile && 'relative',
      transform: isMobile && 'none',
    },
    filter: {
      absolute: isMobile ? true : false,
      right: isMobile ? 0 : -10,
      rotate: isMobile ? 0 : 10,
      top: isMobile ? 0 : -10,
      width: isMobile ? 100 : 75,
    },
  }

  const textPresentation = isMobile
    ? 'textPresentationMobile'
    : 'textPresentation'

  return (
    <>
      <Section isMobile={isMobile} section={'home'}>
        <BackgroundImg
          alt={'lossantos'}
          img={'bgHome.jpg'}
        />
        <Filter float={'right'} {...responsive.filter} />

        <div
          className='containerHome'
          style={{ ...responsive.containerHome }}
        >
          {!isMobile && (
            <div className={'columnRS'}>
              <Link
                button
                dark
                link={'facebook.com'}
                newTab
                router={{
                  currentRoute: currentRoute,
                  setRoute: setRoute,
                }}
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size={'2x'}
                />
              </Link>
              <Link
                button
                dark
                link={'instagram.com'}
                newTab
                router={{
                  currentRoute: currentRoute,
                  setRoute: setRoute,
                }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size={'2x'}
                />
              </Link>
              <Link
                button
                dark
                link={'twitter.com'}
                newTab
                router={{
                  currentRoute: currentRoute,
                  setRoute: setRoute,
                }}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size={'2x'}
                />
              </Link>
            </div>
          )}
          <div className={textPresentation}>
            <p>
              Le serveur <span>roleplay</span> dont vous
              rêviez
            </p>
          </div>
        </div>
        {!isMobile && (
          <div className={'arrowDown'}>
            <Link
              button
              link={'a-propos'}
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
