import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Timer from '../../containers/TimerContainer'

interface Props {
  class: string
  id: string
}

export default function Description(props: Props) {
  return (
    <div className={props.class}>
      <FormattedMessage
        id={props.id}
      />
      <span>
        {'（'}
        <Timer />
        {'）'}
      </span>
    </div>
  )
}
