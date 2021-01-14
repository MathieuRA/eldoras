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

export default function JoinUs({ isMobile }) {
  return (
    <>
      <Section section={'joinUs'} isMobile={isMobile}>
        <BackgroundImg
          alt={'lostsantos'}
          img={'bgJoinUs.jpg'}
        />
        <div className={'filterJoinUs'}>
          {!isMobile &&
            <div className={'titleContainerJoinUs'}>
              <h3>Nous rejoindre ?</h3>
            </div>
          }
          <Filter float={'none'} rotate={0} height={100} width={100} top={0} absolute />
          <div className={'containerJoinUs'}>
            {!isMobile &&
              <div>
                <img src='./assets/img/logo.png' alt={'ok'} />
              </div>
            }
            <div>
              {!isMobile &&
                <p>Alors, <span>convaincu ?</span> Si oui, tu n'as plus qu'à cliquer sur le <span>boutton</span> juste en dessous pour te connecter à notre <span>discord</span>.<br /><br />A tout de suite ! 😉</p>
              }
              <iframe title='discord widget' src="https://discord.com/widget?id=792781992609579070&theme=dark" width="350" height="170" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
          </div>
        </div>
        {!isMobile &&
          <div className={'arrowDown'}>
            <Link button link={'accueil'}>
              <FontAwesomeIcon
                icon={faChevronUp}
                size={'2x'}
              />
            </Link>
          </div>
        }
      </Section>
    </>
  )
}
