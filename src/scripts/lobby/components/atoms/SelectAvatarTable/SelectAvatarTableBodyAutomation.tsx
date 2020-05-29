import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly automation: lobby.Automation
  readonly handleSelect: () => void
}

export const SelectAvatarTableBodyAutomation: React.FC<Props> = props => (
  <div
    className={`lo--select-avatar--table--body--item automation ${props.additionalClassName.join(' ')}`}
    onClick={props.handleSelect}
  >
    <FormattedMessage
      id={`SelectAvatarTableBodyAutomation.automation(${props.automation})`}
    />
  </div>
)
SelectAvatarTableBodyAutomation.displayName = 'SelectAvatarTableBodyAutomation'
