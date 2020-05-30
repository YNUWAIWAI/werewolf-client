import * as React from 'react'
import {SelectRobotAvatarTableBodyContainer} from '../../containers/SelectRobotAvatarTableBodyContainer'
import {SelectRobotAvatarTableHeader} from '../molecules/SelectRobotAvatarTableHeader'

export const SelectRobotAvatarTable: React.FC<{}> = () => (
  <div className="lo--select-avatar--table">
    <SelectRobotAvatarTableHeader />
    <SelectRobotAvatarTableBodyContainer />
  </div>
)
SelectRobotAvatarTable.displayName = 'SelectRobotAvatarTable'
