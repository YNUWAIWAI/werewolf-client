import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {}

export default function CreateNewRobotAvatar(props: Props) {
  return (
    <FormattedMessage
      id="CreateNewRobotAvatar.header"
    >
      {
        text => (
          <div>
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
