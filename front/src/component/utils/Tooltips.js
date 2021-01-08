import { useState } from 'react'

import './tooltips.css'

export default function Tooltips({ children, content }) {
  const [hover, setHover] = useState(false)
  const [position, setPosition] = useState(0)
  const toggleHover = e => {
    console.log(e.clientY)
    setPosition(e.clientY + 10)
    setHover(!hover)
  }

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {hover && (
        <span
          style={{ top: position }}
          className={'tooltips'}
        >
          {content}
        </span>
      )}
      {children}
    </div>
  )
}
