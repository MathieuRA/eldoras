import About from './component/About'
import Home from './component/Home'
import useScrollBlock from './component/customHooks/useScrollBlock'

import { useEffect } from 'react'
import { isEmpty } from 'lodash'

import { MainMenu } from './component/utils/template'

import './App.css'

function App() {
  const [blockScroll] = useScrollBlock()

  let isScrooling = false

  useEffect(() => {
    blockScroll()
    window.addEventListener('mousewheel', scroll)
  }, [])

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
    }, 750)
  }

  return (
    <>
      <MainMenu></MainMenu>
      <main
        id={'wrapId'}
        onScroll={() => console.log('scrooled')}
      >
        <div id={'accueil'}>
          <Home />
        </div>
        <div id={'a-propos'}>
          <About />
        </div>
        <div id={'nous-rejoindre'}></div>
      </main>
    </>
  )
}

export default App
