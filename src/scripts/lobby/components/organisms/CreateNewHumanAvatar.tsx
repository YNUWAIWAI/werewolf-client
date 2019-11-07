import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {}

export default function CreateNewHumanAvatar(props: Props) {
  return (
    <FormattedMessage
      id="CreateNewHumanAvatar.header"
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
