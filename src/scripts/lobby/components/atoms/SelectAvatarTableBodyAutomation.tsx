import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly isFullyAutomated: boolean
}

export default function SelectAvatarTableBodyAutomation(props: Props) {
  return (
    <FormattedMessage
      id={`SelectAvatarTableBodyAutomation.automation(${props.isFullyAutomated ? 'full' : 'semi'})`}
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
