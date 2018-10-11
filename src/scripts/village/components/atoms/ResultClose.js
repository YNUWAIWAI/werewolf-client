// @flow
import Close from './svg/Close'
import React from 'react'

type Props = {
  +handleClick: void => void
}

export default function ResultClose(props: Props) {
  return (
    <div className="result--close" onClick={props.handleClick}>
      <Close />
    </div>
  )
}
