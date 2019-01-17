import * as React from 'react'
import Timer, {Props as TimerProps} from '../atoms/Timer'
import {FormattedMessage} from 'react-intl'

interface Props {
  class: string,
  id: string,
  timer: TimerProps
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
