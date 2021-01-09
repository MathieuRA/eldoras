import About from './component/About'
import Home from './component/Home'

import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'

import { MainMenu } from './component/utils/template'

import './App.css'
import useScrollBlock from './component/customHooks/useScrollBlock'

function App() {
  const [route, setRoute] = useState('home')
  const [blockScroll, allowScroll] = useScrollBlock()

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
        window.location.hash = !downScroll && 'a-propos'
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
      </main>
    </>
  )
}

export default App
