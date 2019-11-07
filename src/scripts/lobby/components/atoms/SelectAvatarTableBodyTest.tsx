import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {
  status: lobby.TestStatus
}

export default function SelectAvatarTableBodyTest(props: Props) {
  return (
    <FormattedMessage
      id={`SelectAvatarTableBodyTest.status(${props.status})`}
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
