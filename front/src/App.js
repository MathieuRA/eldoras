import About from './component/About'
import Home from './component/Home'
import useScrollBlock from './component/customHooks/useScrollBlock'
import JoinUs from './component/JoinUs'

import { useEffect, } from 'react'
import { isEmpty } from 'lodash'

import { MainMenu } from './component/utils/template'

import './App.css'

function App() {
  const mobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)

  const [blockScroll] = useScrollBlock()

  let isScrooling = false

  useEffect(() => {
    !mobile && blockScroll()
    window.addEventListener('mousewheel', scroll)
  })

  const scroll = e => {
    if (isScrooling) {
      return
    }
    const hash = window.location.hash
    const downScroll = e.deltaY > 0 ? true : false
    isScrooling = true

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
        window.location.hash = !downScroll
          ? 'a-propos'
          : 'nous-rejoindre'
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
      <MainMenu isMobile={mobile} />
      <main
        id={'wrapId'}
      ></main>
      <div id={'accueil'}>
        <Home isMobile={mobile} />
      </div>
      <div id={'a-propos'}>
        <About />
      </div>
      <div id={'nous-rejoindre'}>
        <JoinUs />
      </div>
    </>
  )
}

export default App
