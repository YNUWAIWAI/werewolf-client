import * as React from 'react'
import SelectRobotAvatarTableBody from '../../containers/SelectRobotAvatarTableBodyContainer'
import {SelectRobotAvatarTableHeader} from '../molecules/SelectRobotAvatarTableHeader'

export const SelectRobotAvatarTable: React.FC<{}> = () => (
  <div className="lo--select-avatar--table">
    <SelectRobotAvatarTableHeader />
    <SelectRobotAvatarTableBody />
  </div>
)
SelectRobotAvatarTable.displayName = 'SelectRobotAvatarTable'
