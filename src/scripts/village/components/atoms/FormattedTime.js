// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'

type Props = {
  +time: number
}

export default function FormattedTime(props: Props) {
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

