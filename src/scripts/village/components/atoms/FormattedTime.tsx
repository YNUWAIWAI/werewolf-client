import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export interface Props {
  readonly time: number
}

export const FormattedTime: React.FC<Props> = props => {
  if (props.time < 0) {
    return (
      <FormattedMessage
        id="FormattedTime.end"
      />
    )
  }

  const minute = String(Math.floor(props.time / 60)).padStart(2, '0')
  const second = String(props.time % 60).padStart(2, '0')

  return (
    <FormattedMessage
      id="FormattedTime.time"
      values={{
        minute,
        second
      }}
    />
  )
}
FormattedTime.displayName = 'FormattedTime'

