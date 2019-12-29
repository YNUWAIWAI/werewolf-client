import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export default function CreateNewAvatarHeader() {
  return (
    <FormattedMessage
      id="CreateNewAvatar.header"
    >
      {
        text => (
          <div
            className="lo--create-new-avatar--header"
          >
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
