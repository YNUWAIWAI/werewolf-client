import * as React from 'react'
import {FormattedMessage} from 'react-intl'

type ItemType =
  | 'access-token'
  | 'authorized'
  | 'automation'
  | 'avatar-name'
  | 'check-box'
  | 'image'
  | 'language'
  | 'status'
  | 'test'

interface Props {
  type: ItemType
}

export default function SelectAvatarTableHeaderItem(props: Props) {
  const className = `lo--select-avatar--table--header--item ${props.type}`

  if (props.type === 'check-box') {
    return <div className={className} />
  }

  return (
    <FormattedMessage
      id={`SelectAvatarTableHeader(${props.type})`}
    >
      {
        text => (
          <div className={className}>
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
