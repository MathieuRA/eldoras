import { useState } from 'react'

import {
  Footer,
  MainMenu,
} from './component/utils/template'

import Body from './component/Body'

import './App.css'

const App = () => {
  const mobile =
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1

  const [route, setRoute] = useState('admin')

  return (
    <>
      <MainMenu
        isMobile={mobile}
        setRoute={setRoute}
        currentRoute={route}
      />
      <main id={'wrapId'}></main>
      <Body
        isMobile={mobile}
        setRoute={setRoute}
        currentRoute={route}
      />
      <div id={'credits'}>
        <Footer />
      </div>
    </>
  )
}

export default App
