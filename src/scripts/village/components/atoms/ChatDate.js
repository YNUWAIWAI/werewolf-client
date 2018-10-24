// @flow
import {FormattedDate, FormattedMessage, FormattedTime} from 'react-intl'
import React from 'react'

type Props = {
  +from: string,
  +limit: number,
  +to: string
}

export default function ChatDate(props: Props) {
  const f = new Date(props.from)
  const t = new Date(props.to)
  const restTimeValue = f.getTime() - t.getTime() + props.limit * 1000
  const postTime =
    <FormattedDate
      day="2-digit"
      hour="2-digit"
      hour12={false}
      key="date"
      minute="2-digit"
      month="2-digit"
      second="2-digit"
      timeZoneName="short"
      value={props.to}
      year="numeric"
    >
      {(text: string) => text}
    </FormattedDate>
  const restTime =
    <FormattedTime
      key="time"
      minute="2-digit"
      second="2-digit"
      value={restTimeValue < 0 ? 0 : restTimeValue}
    >
      {(text: string) => text}
    </FormattedTime>

  return (
    <FormattedMessage
      id="ChatDate"
      values={{
        postTime,
        restTime
      }}
    >
      {
        (... text: string[]) =>
          <div className="chat--date">
            {text}
          </div>
      }
    </FormattedMessage>
  )
}
