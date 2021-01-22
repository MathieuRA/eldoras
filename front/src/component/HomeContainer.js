import React, { useEffect } from 'react'
import { isEmpty } from 'lodash'

import About from './About'
import Home from './Home'
import JoinUs from './JoinUs'
import useScrollBlock from './customHooks/useScrollBlock'

export default function HomeContainer({
  currentRoute,
  isMobile,
  setRoute,
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
    const downScroll = e.deltaY > 0 ? true : false
    const hash = window.location.hash

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
          currentRoute={currentRoute}
          isMobile={isMobile}
          setRoute={setRoute}
        />
      </div>
      <div id={'a-propos'}>
        <About
          currentRoute={currentRoute}
          isMobile={isMobile}
          setRoute={setRoute}
        />
      </div>
      <div id={'nous-rejoindre'}>
        <JoinUs
          currentRoute={currentRoute}
          isMobile={isMobile}
          setRoute={setRoute}
        />
      </div>
    </>
  )
}
