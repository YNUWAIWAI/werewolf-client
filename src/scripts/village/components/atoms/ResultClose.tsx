import * as React from 'react'
import Close from './svg/Close'

interface Props {
  readonly handleClick: () => void
}

export default function ResultClose(props: Props) {
  return (
    <div
      className="result--close"
      onClick={props.handleClick}
    >
      <Close />
    </div>
  )
}
