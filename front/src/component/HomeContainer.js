import React, { useEffect } from 'react'

import { isEmpty } from 'lodash'

import About from './About'
import useScrollBlock from './customHooks/useScrollBlock'
import Home from './Home'
import JoinUs from './JoinUs'

export default function HomeContainer({
  isMobile,
  setRoute,
  currentRoute,
}) {
  const [blockScroll, allowScroll] = useScrollBlock()

  let isScrooling = false

  useEffect(() => {
    if (!isMobile) {
      blockScroll()
      window.addEventListener('mousewheel', scroll)
    }
    return () => {
      if (!isMobile) {
        window.removeEventListener('mousewheel', scroll)
        allowScroll()
      }
    }
  })

  const scroll = e => {
    if (isScrooling) {
      return
    }

    isScrooling = true
    const hash = window.location.hash
    const downScroll = e.deltaY > 0 ? true : false

    if (isEmpty(hash) && downScroll) {
      window.location.hash = 'a-propos'
    }

    switch (hash) {
      case '#accueil':
        window.location.hash = downScroll
          ? 'a-propos'
          : 'accueil'
        break
      case '#a-propos':
        window.location.hash = downScroll
          ? 'nous-rejoindre'
          : 'accueil'
        break
      case '#nous-rejoindre':
        window.location.hash = downScroll
          ? 'credits'
          : 'a-propos'
        break
      case '#credits':
        window.location.hash = !downScroll
          ? 'nous-rejoindre'
          : 'credits'
        break
      default:
        break
    }

    setTimeout(() => {
      isScrooling = false
    }, 1300)
  }

  return (
    <>
      <div id={'accueil'}>
        <Home
          isMobile={isMobile}
          setRoute={setRoute}
          currentRoute={currentRoute}
        />
      </div>
      <div id={'a-propos'}>
        <About
          isMobile={isMobile}
          setRoute={setRoute}
          currentRoute={currentRoute}
        />
      </div>
      <div id={'nous-rejoindre'}>
        <JoinUs
          isMobile={isMobile}
          setRoute={setRoute}
          currentRoute={currentRoute}
        />
      </div>
    </>
  )
}
