import * as React from 'react'
import SelectRobotAvatarTableBody from '../../containers/SelectRobotAvatarTableBodyContainer'
import SelectRobotAvatarTableHeader from '../molecules/SelectRobotAvatarTableHeader'

export default function SelectRobotAvatarTable() {
  return (
    <div className="lo--select-avatar--table">
      <SelectRobotAvatarTableHeader />
      <SelectRobotAvatarTableBody />
    </div>
  )
}
