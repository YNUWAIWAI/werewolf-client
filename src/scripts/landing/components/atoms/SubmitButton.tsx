import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  type: 'login' | 'signup'
}

export const SubmitButton: React.FC<Props> = props => (
  <button
    className="la--button"
    type="submit"
  >
    <FormattedMessage
      id={`${props.type}-submit`}
    />
  </button>
)
SubmitButton.displayName = 'SubmitButton'
