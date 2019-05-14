import * as React from 'react'
import Help from './svg/Help'

export default function PredictionHelp() {
  return (
    <a
      className="vi--prediction--help"
      href="how-to-play"
      rel="noreferrer noopener"
      target="_blank"
    >
      <Help />
    </a>
  )
}
