import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import {
  BackgroundImg,
  Filter,
  Link,
  Section,
} from './utils/template'

import '../App.css'
import './About.css'

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
        <div className={'rightSideAbout'}></div>
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
