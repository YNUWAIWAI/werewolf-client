import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {}

export default function SelectHumanAvatarTableHeader(props: Props) {
  return (
    <div className="lo--select-avatar--table--header human">
      <div>header1</div>
      <div>header2</div>
    </div>
  )
}
