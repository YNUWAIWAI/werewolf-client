import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export const UpdateNotes: React.FC<{}> = () => (
  <div
    className="la--update-notes"
  >
    <FormattedMessage
      id="UpdateNotes.header"
    />
  </div>
)
UpdateNotes.displayName = 'UpdateNotes'
