// @flow
import React from 'react'
import Timer from '../containers/TimerContainer'

type Props = {
  class: string,
  text: string
}

export default function Description(props: Props) {
  return (
    <div className={props.class}>
      <span>
        {props.text}
      </span>
      {'（'}
      <Timer />
      {'）'}
    </div>
  )
}
