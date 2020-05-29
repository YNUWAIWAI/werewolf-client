import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export const CreateNewAvatarHeader: React.FC<{}> = () => (
  <div
    className="lo--create-new-avatar--header"
  >
    <FormattedMessage
      id="CreateNewAvatar.header"
    />
  </div>
)
CreateNewAvatarHeader.displayName = 'CreateNewAvatarHeader'
