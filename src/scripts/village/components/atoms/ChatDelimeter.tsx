import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export interface Props {
  readonly day: number
}

export default function ChatDelimeter(props: Props) {
  if (props.day >= 0) {
    return (
      <FormattedMessage
        id="ChatContainer.day"
        values={{
          day: props.day
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
