import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export interface Props {
  readonly day: number
}

export const ChatDelimeter: React.FC<Props> = props => {
  if (props.day >= 0) {
    return (
      <div className="vi--chat--delimeter">
        <FormattedMessage
          id="ChatContainer.day"
          values={{
            day: props.day
          }}
        />
      </div>
    )
  }

  return (
    <div className="vi--chat--delimeter">
      <FormattedMessage
        id="ChatContainer.postMortem"
      />
    </div>
  )
}
ChatDelimeter.displayName = 'ChatDelimeter'
