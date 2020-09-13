import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  disabled: boolean
  type: 'login' | 'signup'
}

export const SubmitButton: React.FC<Props> = props => (
  <button
    className="la--form--button"
    disabled={props.disabled}
    type="submit"
  >
    <FormattedMessage
      id={`${props.type}-submit`}
    />
  </button>
)
SubmitButton.displayName = 'SubmitButton'
