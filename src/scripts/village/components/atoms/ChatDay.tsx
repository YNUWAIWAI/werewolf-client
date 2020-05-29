import * as React from 'react'
import {
  FormattedDate,
  FormattedMessage,
  FormattedTime
} from 'react-intl'

interface Props {
  readonly from: string
  readonly limit: number
  readonly to: string
}

export const ChatDay: React.FC<Props> = props => {
  const f = new Date(props.from)
  const t = new Date(props.to)
  const restTimeValue = f.getTime() - t.getTime() + (props.limit * 1000)
  const postTime =
    <FormattedDate
      day="2-digit"
      hour="2-digit"
      hour12={false}
      key="date"
      minute="2-digit"
      month="2-digit"
      second="2-digit"
      value={t}
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
    <div className="vi--chat--day">
      <FormattedMessage
        id="ChatDay"
        values={{
          postTime,
          restTime
        }}
      />
    </div>
  )
}
ChatDay.displayName = 'ChatDay'
