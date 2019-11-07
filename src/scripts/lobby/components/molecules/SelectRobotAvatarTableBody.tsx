import * as React from 'react'
import SelectAvatarTableBodyAccessToken from '../atoms/SelectAvatarTableBodyAccessToken'
import SelectAvatarTableBodyAuthorized from '../atoms/SelectAvatarTableBodyAuthorized'
import SelectAvatarTableBodyAutomation from '../atoms/SelectAvatarTableBodyAutomation'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'
import SelectAvatarTableBodyStatus from '../atoms/SelectAvatarTableBodyStatus'
import SelectAvatarTableBodyTest from '../atoms/SelectAvatarTableBodyTest'
import {lobby} from '../../types'

interface Props {}

export default function SelectRobotAvatarTableBody(props: Props) {
  return (
    <div className="lo--select-avatar--table--body">
      <SelectAvatarTableBodyCheckBox />
      <SelectAvatarTableBodyAvatarName />
      <SelectAvatarTableBodyStatus />
      <SelectAvatarTableBodyAuthorized />
      <SelectAvatarTableBodyTest />
      <SelectAvatarTableBodyAutomation />
      <SelectAvatarTableBodyAccessToken />
      <SelectAvatarTableBodyCheckBox />
      <SelectAvatarTableBodyAvatarName />
      <SelectAvatarTableBodyStatus />
      <SelectAvatarTableBodyAuthorized />
      <SelectAvatarTableBodyTest />
      <SelectAvatarTableBodyAutomation />
      <SelectAvatarTableBodyAccessToken />
    </div>
  )
}
