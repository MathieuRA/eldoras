import { useState } from 'react'

import Body from './component/Body'

import {
  Footer,
  MainMenu,
} from './component/utils/template'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

const App = () => {
  const mobile =
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1

  const [route, setRoute] = useState('home')

  return (
    <>
      <MainMenu
        currentRoute={route}
        isMobile={mobile}
        setRoute={setRoute}
      />
      <main id={'wrapId'}></main>
      <Body
        currentRoute={route}
        isMobile={mobile}
        setRoute={setRoute}
      />
      <div id={'credits'}>
        <Footer />
      </div>
    </>
  )
}

export default App
