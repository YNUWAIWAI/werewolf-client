import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly status: lobby.AvatarStatus
}

export default function SelectAvatarTableBodyStatus(props: Props) {
  return (
    <div
      className={`lo--select-avatar--table--body--item status ${props.additionalClassName.join(' ')}`}
      onClick={props.handleSelect}
    >
      <FormattedMessage
        id={`SelectAvatarTableBodyStatus.status(${props.status})`}
      />
    </div>
  )
}
