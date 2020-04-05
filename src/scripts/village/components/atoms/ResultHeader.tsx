import * as React from 'react'
import Close from './svg/Close'

interface Props {
  readonly handleClick: () => void
}

export default function ResultHeader(props: Props) {
  return (
    <div
      className="vi--result--header"
    >
      <button
        className="vi--result--header--close"
        onClick={props.handleClick}
      >
        <Close />
      </button>
    </div>
  )
}
