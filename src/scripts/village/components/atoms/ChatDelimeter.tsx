import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export interface Props {
  readonly date: number
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
          text => (
            <div className="vi--chat--delimeter">
              {text}
            </div>
          )
        }
      </FormattedMessage>
    )
  }

  return (
    <FormattedMessage
      id="ChatContainer.postMortem"
    >
      {
        text => (
          <div className="vi--chat--delimeter">
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
