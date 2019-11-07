import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {}

export default function SelectHumanAvatarTableBody(props: Props) {
  return (
    <div className="lo--select-avatar--table--body human">
      <div>body1-1</div>
      <div>body1-2</div>
      <div>body2-1</div>
      <div>body2-2</div>
    </div>
  )
}
