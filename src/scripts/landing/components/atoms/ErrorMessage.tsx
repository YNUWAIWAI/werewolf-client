import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  id: string
  visible: boolean
}

export const ErrorMessage: React.FC<Props> = props => {
  if (!props.visible) {
    return null
  }

  return (
    <div className="la--error">
      <FormattedMessage
        id={props.id}
      />
    </div>
  )
}
ErrorMessage.displayName = 'ErrorMessage'
