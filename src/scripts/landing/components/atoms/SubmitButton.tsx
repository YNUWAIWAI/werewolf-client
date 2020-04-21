import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  type: 'login' | 'signup'
}

export default function SubmitButton(props: Props) {
  return (
    <button
      className="la--button"
      type="submit"
    >
      <FormattedMessage
        id={`${props.type}-submit`}
      />
    </button>
  )
}
