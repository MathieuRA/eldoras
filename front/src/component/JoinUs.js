import React from 'react'

import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  BackgroundImg,
  Filter,
  Link,
  Section,
} from './utils/template'

import './JoinUs.css'

export default function JoinUs({
  currentRoute,
  isMobile,
  setRoute,
}) {
  return (
    <>
      <Section isMobile={isMobile} section={'joinUs'}>
        <BackgroundImg
          alt={'lostsantos'}
          img={'bgJoinUs.jpg'}
        />
        <div className={'filterJoinUs'}>
          {!isMobile && (
            <div className={'titleContainerJoinUs'}>
              <h3>Nous rejoindre ?</h3>
            </div>
          )}
          <Filter
            absolute
            float={'none'}
            height={100}
            rotate={0}
            top={0}
            width={100}
          />
          <div className={'containerJoinUs'}>
            {!isMobile && (
              <div>
                <img
                  alt={'ok'}
                  src='./assets/img/logo.png'
                />
              </div>
            )}
            <div>
              {!isMobile && (
                <p>
                  Alors, <span>convaincu ?</span> Si oui, tu
                  n'as plus qu'à cliquer sur le{' '}
                  <span>boutton</span> juste en dessous pour
                  te connecter à notre <span>discord</span>.
                  <br />
                  <br />A tout de suite ! 😉
                </p>
              )}
              <iframe
                allowtransparency='true'
                frameBorder='0'
                height='170'
                sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                src='https://discord.com/widget?id=792781992609579070&theme=dark'
                title='discord widget'
                width='350'
              ></iframe>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className={'arrowDown'}>
            <Link
              button
              link={'accueil'}
              router={{
                currentRoute: currentRoute,
                setRoute: setRoute,
              }}
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                size={'2x'}
              />
            </Link>
          </div>
        )}
      </Section>
    </>
  )
}
