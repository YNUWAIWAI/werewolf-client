// @flow
import Timer, {type Props as TimerProps} from '../atoms/Timer'
import React from 'react'

type Props = {
  +class: string,
  +text: string,
  +timer: TimerProps
}

export default function Description(props: Props) {
  return (
    <div className={props.class}>
      <span>
        {props.text}
      </span>
      <span>
        {'（'}
        <Timer {... props.timer} />
        {'）'}
      </span>
    </div>
  )
}
