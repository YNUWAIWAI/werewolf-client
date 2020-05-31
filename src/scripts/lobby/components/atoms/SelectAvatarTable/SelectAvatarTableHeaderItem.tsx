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

export const SelectAvatarTableHeaderItem: React.FC<Props> = props => {
  const className = `lo--select-avatar--table--header--item ${props.type}`

  if (props.type === 'check-box') {
    return <div className={className} />
  }

  return (
    <div
      className={className}
    >
      <FormattedMessage
        id={`SelectAvatarTableHeader(${props.type})`}
      />
    </div>
  )
}
SelectAvatarTableHeaderItem.displayName = 'SelectAvatarTableHeaderItem'
