// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'

export type Props = {
  +date: number
}

export default function ChatDelimeter(props: Props) {
  if (props.date >= 0) {
    return (
      <FormattedMessage
        id="ChatContainer.date"
        values={{
          date: props.date
        }}
      >
        {
          (text: string) =>
            <div className="chat--delimeter">
              {text}
            </div>
        }
      </FormattedMessage>
    )
  }

  return (
    <FormattedMessage
      id="ChatContainer.postMortem"
    >
      {
        (text: string) =>
          <div className="chat--delimeter">
            {text}
          </div>
      }
    </FormattedMessage>
  )
}
