import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import SelectRobotAvatarTableBody from '../molecules/SelectRobotAvatarTableBody'
import SelectRobotAvatarTableHeader from '../molecules/SelectRobotAvatarTableHeader'
import {lobby} from '../../types'

interface Props {}

export default function SelectRobotAvatarTable(props: Props) {
  return (
    <div className="lo--select-avatar--table">
      <SelectRobotAvatarTableHeader />
      <SelectRobotAvatarTableBody />
    </div>
  )
}
