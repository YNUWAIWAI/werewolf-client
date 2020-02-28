import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly automation: lobby.Automation
  readonly handleSelect: () => void
}

export default function SelectAvatarTableBodyAutomation(props: Props) {
  return (
    <FormattedMessage
      id={`SelectAvatarTableBodyAutomation.automation(${props.automation})`}
    >
      {
        text => (
          <div
            className={`lo--select-avatar--table--body--item automation ${props.additionalClassName.join(' ')}`}
            onClick={props.handleSelect}
          >
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
