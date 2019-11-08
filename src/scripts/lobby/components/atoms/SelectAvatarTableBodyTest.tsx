import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {
  test: lobby.TestStatus
}

export default function SelectAvatarTableBodyTest(props: Props) {
  return (
    <FormattedMessage
      id={`SelectAvatarTableBodyTest.test(${props.test})`}
    >
      {
        text => (
          <div className="lo--select-avatar--table--body--item test">
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
