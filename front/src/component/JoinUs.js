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

export default function JoinUs() {
  return (
    <>
      <Section section={'joinUs'}>
        <BackgroundImg
          alt={'lostsantos'}
          img={'bgJoinUs.jpg'}
        />
        <div className={'filterJoinUs'}>
          <div className={'titleContainerJoinUs'}>
            <h3>Nous rejoindre ?</h3>
          </div>
          <Filter float={'none'} rotate={0} height={100} width={100} top={0} absolute />
          <div className={'containerJoinUs'}>
            <div>
              <img src='./assets/img/logo.png' alt={'ok'} />
            </div>
            <div>
              <p>Alors, <span>convaincu ?</span> Si oui, tu n'as plus que à cliquer sur le <span>boutton</span> juste en dessous pour accéder à notre <span>discord</span>.<br /><br />A tout de suite ! 😉</p>
              <button onClick={discordLink}>Discord</button>
            </div>
          </div>
        </div>
        <div className={'arrowDown'}>
          <Link button link={'accueil'}>
            <FontAwesomeIcon
              icon={faChevronUp}
              size={'2x'}
            />
          </Link>
        </div>
      </Section>
    </>
  )
}

const discordLink = () => window.open('https://discord.gg/qWUuWJU7nK', '_blank')
