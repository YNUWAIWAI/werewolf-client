// @flow
import Timer, {type Props as TimerProps} from '../atoms/Timer'
import {FormattedMessage} from 'react-intl'
import React from 'react'

type Props = {
  +class: string,
  +id: string,
  +timer: TimerProps
}

export default function Description(props: Props) {
  return (
    <div className={props.class}>
      <FormattedMessage
        id={props.id}
      />
      <span>
        {'（'}
        <Timer {... props.timer} />
        {'）'}
      </span>
    </div>
  )
}
