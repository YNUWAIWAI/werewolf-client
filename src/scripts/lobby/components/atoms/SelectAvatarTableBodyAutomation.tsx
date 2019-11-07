import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {
  readonly automation: lobby.Automation
}

export default function SelectAvatarTableBodyAutomation(props: Props) {
  return (
    <FormattedMessage
      id={`SelectAvatarTableBodyAutomation.automation(${props.automation})`}
    >
      {
        text => (
          <div className="lo--select-avatar--table--body--item automation">
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
