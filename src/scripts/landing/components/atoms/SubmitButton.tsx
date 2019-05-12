import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  type: 'login' | 'signup'
}

export default function SubmitButton(props: Props) {
  return (
    <FormattedMessage
      id={`${props.type}-submit`}
    >
      {
        text => (
          <button
            className="button"
            type="submit"
          >
            {text}
          </button>
        )
      }
    </FormattedMessage>
  )
}
